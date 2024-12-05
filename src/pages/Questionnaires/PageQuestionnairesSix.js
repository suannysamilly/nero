import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PageQuestionnairesSix = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption) {
            const timer = setTimeout(() => {
                navigation.navigate('PageQuestionnairesSeven');
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
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>

                <Text style={styles.title}>O que você acredita que pode ser feito para reduzir a desigualdade de gênero?</Text>

                <View style={styles.radioContainer}>
                    {['Mais políticas públicas de inclusão', 'Educação e conscientização desde cedo', 'Punições mais severas para atos discriminatórios', 'Incentivo à igualdade no mercado de trabalho', 'Aumento da representatividade feminina em cargos de liderança'].map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.radioOption, selectedOption === option && styles.selectedOption]}
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
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
    },
    subContainer: {
        alignItems: 'center',
        width: '90%', // Limita a largura da subContainer para 90% da tela
        paddingHorizontal: 20, // Adiciona espaçamento nas laterais
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
        marginTop: 20, // Dá um espaçamento entre o título e os elementos acima
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, // Dá um espaçamento entre o título e as opções
    },
    radioContainer: {
        width: '100%', // Garante que o container das opções ocupe toda a largura disponível
    },
    radioOption: {
        borderWidth: 1,
        borderColor: '#7B4921',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30, // Garante que o conteúdo tenha espaçamento interno
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

export default PageQuestionnairesSix;
