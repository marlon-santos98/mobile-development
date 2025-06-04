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
        <Text style={estilos.text}>Xbox</Text>
        <Text style={estilos.textContent}>Xbox é uma marca de consoles criada pela Microsoft.</Text>
        <Text style={estilos.textContent}>Toque nos cards para conhecer.</Text>
        <ImageBackground style={estilos.imageBackground}>
        <Image 
            source={{uri: 'https://m.media-amazon.com/images/I/51pNvD-nsvL._AC_UF1000,1000_QL80_.jpg'}}
            style={{ width: 100, height:100, borderRadius:10}}
            resizeMode="contain"
        />
        <Pressable
            onPress={() => props.navigation.navigate('TelaConsoles')}
            style={{padding: 1, margin: 1}}>
            <Text style={estilos.textContent}>Conheça os consoles</Text>
        </Pressable>  
        </ImageBackground> 
        <ImageBackground style={estilos.imageBackground}>
        <Image 
            source={halo}
            style={{ width: 100, height: 210}}
            resizeMode="contain"/>
        <Pressable
            onPress={() => props.navigation.navigate('TelaJogos')}
            style={{padding: 10, margin: 10 }}>
            <Text style={estilos.textContent}>Conheça os jogos</Text>
        </Pressable>
        </ImageBackground>
        <ImageBackground style={estilos.imageBackground}>
        <Image 
            source={xcloud}
            style={{ width: 100, height: 100}}
            resizeMode="contain"/>
        <Pressable
            onPress={() => props.navigation.navigate('TelaNuvem')}
            style={{padding: 10, margin: 10 }}>
            <Text style={estilos.textContent}>Conheça o xCloud</Text>
        </Pressable>
        </ImageBackground>
        </ScrollView>
    )
}