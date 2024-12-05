import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import { api } from '../../server/api';
import { isAxiosError } from 'axios';

const PageLoginTwo = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePressCreateAccount = () => {
    navigation.navigate('PageLoginThree');
  };

  const handlePressPassword = () => {
    navigation.navigate('PageLoginFour');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email e senha são obrigatórios');
      return;
    }

    setError('');

    try {
      const response = await api.post('/login', { email, password });
      navigation.navigate('PageQuestionnairesOne'); // Ajuste para a próxima tela
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err.response?.data || 'Erro desconhecido no login.');
      } else {
        setError('Erro ao conectar com o servidor.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Bem-vindo(a) de volta ao</Text>
        <Text style={styles.title}>Nero Transforma</Text>
        <Image
          source={require('../../images/Onboarding.png')} // Ajuste o caminho da imagem se necessário
          style={styles.image}
        />
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity onPress={handlePressPassword}>
            <Text style={styles.textInput}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {error && <Text style={[styles.errorText, { color: '#AF6528', position: 'absolute', top:180}]}>{error}</Text>}
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={handleLogin}
        >
          <Text style={styles.buttonTextSignUp}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonCreateAccount}
          onPress={handlePressCreateAccount}
        >
          <Text style={styles.buttonTextCreateAccount}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  subContainer: {
    maxWidth: '80%',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },
  image: {
    width: 201,
    height: 221,
    marginVertical: 20,
    position: 'absolute',
    top: 100,
  },
  title: {
    color: '#151313',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 470,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AF6528',
    padding: 12,
    fontSize: 14,
  },
  textInput: {
    color: '#808080',
  },
  
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    top: 690,
  },
  buttonSignUp: {
    width: '80%',
    padding: 15,
    backgroundColor: '#7B4921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextSignUp: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCreateAccount: {
    width: '80%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonTextCreateAccount: {
    color: '#482E1A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PageLoginTwo;
