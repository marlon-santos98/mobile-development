import React from "react";
import { View, Text, ImageBackground } from "react-native";
import fundo from "../../assets/background.png"

export default function TelaInicio(){
    return(
        <ImageBackground source={fundo}>
            <Text>Tela Inicio</Text>
        </ImageBackground>
    )
}

export default  TelaInicio;
