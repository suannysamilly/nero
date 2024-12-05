import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native';

const PageExactSciencesAndTechnology = ({ navigation }) => {

    const handlePressGoBack = () => {
        navigation.navigate('Tabs', { screen: 'Percentage' });
    };
    const handlePressContinue = () => {
        navigation.navigate('PageTi');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressGoBack}>
                    <Image source={require('../../images/GoBack.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.goBackText}>Exatas e Tecnologia</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.contentInfo}>
                    {/* Bloco Homens */}
                    <View style={styles.infoMen}>
                    
                        <Image
                            source={require('../../images/Scooter.png')}
                            style={styles.imageMen}
                        />
                        <Text style={styles.textInfoTop}>Homens</Text>
                        <Text style={styles.textInfo}>80%</Text>
                        
                    </View>

                    {/* Bloco Mulheres */}
                    <View style={styles.infoWoman}><Text style={styles.textInfo}>20%</Text>
                        <Text style={styles.textInfoTop}>Mulheres</Text>
                        
                        <Image
                            source={require('../../images/Blowing.png')}
                            style={styles.imageWoman}
                        />
                        
                    </View>
                </View>

                <Text style={styles.title}>Mude o Futuro de Exatas e da Tecnologia!</Text>
                <Text style={styles.subTitle}>Clique no botão abaixo e crie uma nova porcentagem no setor, e contribua para um futuro mais igualitário. 🚀👩‍💻</Text>
                <TouchableOpacity style={styles.button} onPress={handlePressContinue}>
                    <Text style={styles.buttonText}>Quero conhecer a área!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 100,
    },
    backIcon: {
        marginRight: 15,
        width: 24,
        height: 24,
    },
    goBackText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7B4921',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    contentInfo: {
        flexDirection: 'column',  // Alinha as Views verticalmente
        justifyContent: 'center',
        alignItems: 'center',  // Alinha o conteúdo no centro
        width: '100%',
    },
    infoMen: {
        flexDirection: 'row',
        alignItems: 'center',  // Alinha o texto e imagem ao centro
        marginBottom: 30,  // Espaço entre os blocos
    },
    infoWoman: {
        flexDirection: 'row',
        alignItems: 'center',  // Alinha o texto e imagem ao centro
        marginBottom: 30,  // Espaço entre os blocos

    },
    textInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#482E1A',
        marginTop: 50,  // Adiciona espaço entre o texto e a imagem
    },
    textInfoTop: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#482E1A',
        marginBottom: 10,  // Adiciona espaço entre o texto e a imagem
    },
    imageMen: {
        width: 196,
        height: 212,
    },
    imageWoman: {
        width: 120,
        height: 127,
        marginTop: 10,  // Adiciona espaço entre o texto e a imagem
    },
    title: {
        fontSize: 16,
        color: '#482E1A',
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 14,
        width: '80%',
        textAlign: 'center',
        marginBottom: 50,
    },
    button: {
        width: '90%',
        padding: 15,
        backgroundColor: '#7B4921',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default PageExactSciencesAndTechnology;
