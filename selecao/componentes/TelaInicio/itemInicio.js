import { ImageBackground, Text, View, TouchableOpacity } from "react-native";

import estilo from "./estilo"

export function ItemInicio(props){
    return(        
    <TouchableOpacity onPress={props.acao} style={estilo.container}>
        <ImageBackground source={props.img} style={estilo.container}>
                <View style={estilo.overlay} />
                <Text style={estilo.titulo}>{props.texto}</Text>
        </ImageBackground>
    </TouchableOpacity>
    )
}

export default ItemInicio