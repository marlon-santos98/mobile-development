import React from "react";
import { View, Text, Pressable, ScrollView, Image, ImageBackground } from "react-native";
import estilos from "./estilo";


import xbox from '../../assets/logo.png'
import halo from '../../assets/jogo-1.png'
import xcloud from '../../assets/xcloud-1.png'

export default function TelaInicial(props) {
    return(
        <ScrollView style={estilos.container}>
            <Image
                source={xbox}
                style={estilos.image} />
        <Text>Xbox</Text>
        <Text>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>
        <ImageBackground>
        <Image 
            source={{uri: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg'}}
            style={{ width: 300, height: 200}}
            resizeMode="contain"
        />
        <Pressable
            onPress={() => props.navigation.navigate('TelaConsoles')}
            style={{padding: 10, margin: 10 }}>
            <Text>1º Conheça os consoles</Text>
        </Pressable>  
        </ImageBackground> 
        <ImageBackground>
        <Image 
            source={halo}
            style={{ width: 300, height: 200}}
            resizeMode="contain"/>
        <Pressable
            onPress={() => props.navigation.navigate('TelaJogos')}
            style={{padding: 10, margin: 10 }}>
            <Text>2º Conheça os jogos</Text>
        </Pressable>
        </ImageBackground>
        <ImageBackground>
        <Image 
            source={xcloud}
            style={{ width: 300, height: 200}}
            resizeMode="contain"/>
        <Pressable
            onPress={() => props.navigation.navigate('TelaNuvem')}
            style={{padding: 10, margin: 10 }}>
            <Text>3º Conheça o xCloud</Text>
        </Pressable>
        </ImageBackground>
        </ScrollView>
    )
}