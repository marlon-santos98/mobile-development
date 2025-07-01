import { useState } from "react";
import { ImageBackground, View, Text } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import estilos from "./estilos";


export default function Pontos(props) {

	const [pontos, setPontos] = useState(20);

    const adicionarPontos = () => {
        let somaPontos = pontos;
        somaPontos++;
        setPontos(somaPontos);
    }

    const removerPontos = () => {
        let tiraPontos = pontos;
        tiraPontos--;
        setPontos(tiraPontos);
    }

    const resetaPontos = () => {
        setPontos(20);
    }

    const rotacao = (props.rotacao === 180) ? estilos.rotacao : '';
    const corDeFundo = (props.cor === "azul") ? estilos.FundoAzul : estilos.FundoVerde;
	
  return (
        <View style={[estilos.areaPontos, rotacao, corDeFundo]}>
            <ImageBackground blurRadius={60} source={props.Fundo} style={estilos.ImagemFundo}>
                <AntDesign onPress={removerPontos} name="minuscircleo" size={40} color="white" />
                <View style={estilos.areaNumero}>
                    <Text style={estilos.textoPontos}>{pontos}</Text>
                    <MaterialCommunityIcons onPress={resetaPontos} name="restore" size={36} color="white" />
                </View>
                <AntDesign onPress={adicionarPontos} name="pluscircleo" size={40} color="white" />
            </ImageBackground>
        </View>
  );
}