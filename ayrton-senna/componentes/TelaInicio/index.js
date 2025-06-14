import React from "react";
import { View, Text, ImageBackground, Image} from "react-native";
import estilos from "../TelaInicio/estilos"

import foto from "../../assets/foto-capa.jpg"
import imgFundo from "../../assets/fundo.jpg"

export default function TelaInicio(){
    return(
        <ImageBackground source={imgFundo} style={estilos.img} blurRadius={2}>
            <Image source={foto} style={estilos.img1}/>
            <View  style={estilos.back}>
                <Text style={estilos.title}>Arton Senna</Text>
                <Text style={estilos.text}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto</Text>
            </View>
        </ImageBackground>
    )
}