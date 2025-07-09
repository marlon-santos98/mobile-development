import React from "react";
import {View, Text, TextInput} from "react-native"
import estilo from "../../assets/estilo";

export default function InputConversao(props){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>{props.textoPrincipal}</Text>
            <View style={estilo.container_2}>
                <View style={estilo.milhas}>
                    <Text>{props.texto}</Text>
                </View>
                <View style={estilo.input}>
                    <TextInput
                        keyboardType="decimal-pad"
                        defaultValue="0"
                        onChangeText={props.valor}
                    />
                </View>
            </View>
        </View>
    )
}