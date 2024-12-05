import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageQuestionnairesNine = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption) {
      const timer = setTimeout(() => {
        navigation.navigate('PageQuestionnairesTen');
      }, 1300);

      return () => clearTimeout(timer); // Limpar timeout caso o componente seja desmontado
    }
  }, [selectedOption]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require('../../images/Questions-cuate.png')}
          style={styles.image}
        />

        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        <Text style={styles.title}>
          Para finalizar, que tipo de funcionalidade você gostaria de ver em um app voltado para conscientização sobre desigualdade de gênero? (pode marcar mais de uma opção)
        </Text>

        <View style={styles.radioContainer}>
          {['Cursos e materiais educativos', 'Ferramentas de denúncia de discriminação', 'Espaço para debates e trocas de experiências', 'Dados e estatísticas sobre igualdade de gênero', 'Exemplos de mulheres inspiradoras'].map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.radioOption,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => setSelectedOption(option)}
            >
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', // Garante que o conteúdo será centralizado verticalmente
    alignItems: 'center', // Garante que o conteúdo será centralizado horizontalmente
  },
  subContainer: {
    width: '90%', // Limita a largura da subContainer para 90% da tela
    alignItems: 'center', // Garante que os itens dentro de subContainer são centralizados
    paddingHorizontal: 20, // Adiciona espaçamento lateral
  },
  image: {
    width: 247,
    height: 265,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#7B4921',
  },
  title: {
    color: '#151313',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify', // Justifica o texto
    marginBottom: 20, // Espaçamento entre o título e as opções
  },
  radioContainer: {
    width: '100%', // Garante que o container das opções ocupe toda a largura disponível
  },
  radioOption: {
    borderWidth: 1,
    borderColor: '#7B4921',
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOption: {
    borderColor: '#482E1A',
    backgroundColor: '#F5F5F5',
  },
  radioText: {
    fontSize: 16,
    color: '#151313',
  },
});

export default PageQuestionnairesNine;
