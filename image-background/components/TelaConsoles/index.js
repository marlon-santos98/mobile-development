import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import estilos from './estilo';

export default function TelaConsoles() {
    return(
        <ScrollView>
            <Image
                source={{uri: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg'}}
                style={estilos.image}
                resizeMode="contain"
            />
            <Text style={estilos.text}>XBOX SERIES S</Text>
            <Text style={estilos.textBold}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
            <Text style={estilos.textContent}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>

            <Image
                source={{uri: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg'}}
                style={estilos.image}
                resizeMode="contain"
            />
            <Text style={estilos.text}>XBOX SERIES X</Text>
            <Text style={estilos.textBold}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
            <Text style={estilos.textContent}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>

        </ScrollView>
    )
}