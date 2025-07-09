import React,{useState} from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import background from "../../assets/background_b.jpeg"
import estilo from "./estilo"
import InputConversao from "../inputConversao";
import ResultadoConversao from "../ResultadoConversao";

export default function  Km_mi(){
    const [valor, setValor] = useState("0")

    function converteKmParaMi(quilometros){
        milhas = quilometros/1.60
        setValor(milhas.toFixed(2))
    }

    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.container}>
                <InputConversao texto="Quilômetros" valor={valorInput => converteKmParaMi(valorInput)} textoPrincipal="Conversor de quilômetros para milhas"/>
                <ResultadoConversao valor={valor} medida="Milhas"/>
            </ImageBackground>
        </SafeAreaView>
    )
}