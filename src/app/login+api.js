import { ExpoResponse } from 'expo-router/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { SignJWT } from 'jose';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new ExpoResponse("Email e senha são obrigatórios", {
        status: 400,
      });
    }

    const aluno = await prisma.aluno.findUnique({
      where: { emailAluno: email },
    });

    if (!aluno) {
      return new ExpoResponse("Usuário não encontrado", {
        status: 404,
      });
    }

    const isMatch = await bcrypt.compare(password, aluno.senha);

    if (!isMatch) {
      return new ExpoResponse("Email ou senha incorreta", {
        status: 400,
      });
    }

    const token = await new SignJWT({ id: aluno.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(new TextEncoder().encode(JWT_SECRET));

    return ExpoResponse.json({ token });
  } catch (err) {
    console.error("Erro no servidor:", err.message);
    return new ExpoResponse("Erro no Servidor, tente novamente", {
      status: 500,
    });
  }
}
