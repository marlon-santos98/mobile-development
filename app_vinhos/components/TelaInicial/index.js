import react from 'react'
import {View, Text, ImageBackground} from 'react-native'
import capa from '../../assets/capa.jpg'
import estilos from '../../components/TelaInicial/estilos'

export default function TelaInicio(){
    return(
            <ImageBackground source={capa} style={estilos.container} blurRadius={4}>
                <View style={estilos.containerText}>
                <Text style={estilos.text}>Adega Preferida</Text>
                <Text style={estilos.content}>Aqui você encontra os melhores e mais saborosos vinhos</Text>
                </View>
            </ImageBackground>
    )
}