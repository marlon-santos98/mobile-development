import { View, Text, ImageBackground } from "react-native";
import fundo from "../../assets/background.png"

//photos
import urug from "../../assets/bandeiras/uruguai.png"
import bra from "../../assets/bandeiras/brasil.png"
import maraca from "../../assets/estadios/estadio_brasil.png"
import sue from "../../assets/bandeiras/suecia.png"
import suecia from "../../assets/estadios/estadio_suecia.png"
import chi from "../../assets/bandeiras/tchecoslovaquia.png"
import chile from "../../assets/estadios/estadio_chile.png"
//components
import ItemFinal from "./itemFinal"

//estilos
import estilo from "../../assets/estilos";

export default function TelaFinais(){
    return(
        <ImageBackground source={fundo} style={estilo.fundo}>
            <Text style={estilo.titulo}>FINAIS</Text>
            <ItemFinal vencedor="1950 - Maracanã, Brasil" img={urug} resultado="2x1" img1={bra} img2={maraca}/>
            <ItemFinal vencedor="1958 - Rasunda, Suécia" img={bra} resultado="5x2" img1={sue} img2={suecia}/>
            <ItemFinal vencedor="1962 - Estadio Nacional, Chile" img={bra} resultado="3x1" img1={chi} img2={chile}/>

        </ImageBackground>
    )
}
