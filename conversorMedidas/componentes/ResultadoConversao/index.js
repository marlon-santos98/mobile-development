import React from "react";
import {View, Text} from "react-native"
import estilo from "../../assets/estilo";

export default function ResultadoConversao(props){
    return(
        <View style={estilo.containerValor}>
            <Text style={estilo.valor}>{props.valor}</Text>
            <Text style={estilo.texto}>{props.medida}</Text>
        </View>
        
    )
}