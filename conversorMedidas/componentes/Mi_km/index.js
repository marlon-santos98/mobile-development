import React,{useState} from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import background from "../../assets/background.jpg"
import estilo from "./estilo"
import InputConversao from "../inputConversao";
import ResultadoConversao from "../ResultadoConversao";


export default function  Mi_km(){

        const [valor, setValor] = useState("0")
    
        function converteMiParaKm(milhas){
            quilometros = milhas*1.60
            setValor(quilometros.toFixed(2))
        }
    
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.container}>
                <InputConversao texto="Milhas" valor={valorInput => converteMiParaKm(valorInput)} textoPrincipal="Conversor de milhas para quilômetros"/>
                <ResultadoConversao valor={valor} medida="Quilômetros"/>
            </ImageBackground>
        </SafeAreaView>
    )
}