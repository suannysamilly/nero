import { ExpoResponse } from 'expo-router/server';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new ExpoResponse("Email e senha são obrigatórios", {
        status: 400,
      });
    }

    const existingUser = await prisma.aluno.findUnique({
      where: { emailAluno: email },
    });

    if (existingUser) {
      return new ExpoResponse("Usuário já cadastrado", {
        status: 409,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashSenha = await bcrypt.hash(password, salt);

    const alunoDB = await prisma.aluno.create({
      data: {
        nomeAluno: "Nome do Aluno", // Personalize conforme necessário
        emailAluno: email,
        senha: hashSenha,
      },
    });

    return ExpoResponse.json(alunoDB, {
      status: 201,
    });
  } catch (err) {
    console.error("Erro no servidor:", err.message);
    return new ExpoResponse("Erro no Servidor, tente novamente", {
      status: 500,
    });
  }
}
