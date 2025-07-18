import React from "react";
import { View, Text, ImageBackground } from "react-native";
import fundo from "../../assets/background.png"

//estilos
import estilo from "../../assets/estilos"

//photos
import finais from "../../assets/bg_finais.png"
import titulos from "../../assets/bg_titulos.png"
import artilheiros from "../../assets/bg_artilheiros.png"

//components
import Card from "./itemInicio"

export default function TelaInicio(props){
    const abrirFinais = () => {
        props.navigation.navigate('Finais')
    }
    const abrirTitulos = () => {
        props.navigation.navigate('Titulos')
    }
    const abrirArtilheiros = () => {
        props.navigation.navigate('Artilheiros')
    }
    return(
        <ImageBackground source={fundo} style={estilo.fundo}>
            <Text style={estilo.titulo}>BRASIL NAS COPAS DO MUNDO</Text>
            <Card acao={abrirFinais} texto="FINAIS" img={finais}/>
            <Card acao={abrirArtilheiros} texto="ARTILHEIROS" img={artilheiros}/>
            <Card acao={abrirTitulos} texto="TITULOS" img={titulos}/>
        </ImageBackground>
    )
}
