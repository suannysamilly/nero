import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ActivityIndicator 
} from 'react-native';

import { api } from '../../server/api';
import { isAxiosError } from 'axios';

const PageLoginThree = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePressSignUp = async () => {
    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await api.post('/create', { name, email, password });
      if (response.status === 200 || response.status === 201) {
        navigation.navigate('PageQuestionnairesOne');
      } else {
        setError(response.data.message || 'Não foi possível realizar o cadastro.');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 409) {
          setError('Este e-mail já está cadastrado.');
        } else {
          console.error('Erro Axios:', error.response?.data || error.message);
          setError(error.response?.data?.message || 'Erro desconhecido no servidor.');
        }
      } else {
        console.error('Erro desconhecido:', error);
        setError('Ocorreu um erro ao se conectar com o servidor.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePressCreateAccount = () => {
    navigation.navigate('PageLoginTwo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>Bem-vindo(a) ao</Text>
        <Text style={styles.title}>Nero Transforma</Text>

        <Image
          source={require('../../images/Onboarding.png')} 
          style={styles.image}
        />
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seu nome"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

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
          <TouchableOpacity onPress={handlePressCreateAccount}>
            <Text style={styles.textInput}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>

      {error && (
  <Text style={[styles.errorText, { color: '#AF6528', position: 'absolute', top: 650 }]}>
    {error}
  </Text>
)}

<View style={styles.buttons}>
  <TouchableOpacity
    style={styles.buttonSignUp}
    onPress={handlePressSignUp}
    disabled={loading}
  >
    {loading ? (
      <ActivityIndicator size={24} color="#fff" />
    ) : (
      <Text style={styles.buttonTextSignUp}>Criar conta</Text>
    )}
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
    top: 400,
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
  buttons: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    top: 700,
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

export default PageLoginThree;
