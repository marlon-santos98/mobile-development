import { ScrollView, Text, ImageBackground } from "react-native";
import fundo from "../../assets/background.png"

import ItemTitulo from "./itemTitulo"

import estilo from "../../assets/estilos";

import um from "../../assets/1.png"
import suecia from "../../assets/cidades/solna.png"

export default function TelaTitulos(){
    return(
        <ImageBackground source={fundo} style={estilo.fundo}>
            <ScrollView>
            <Text style={estilo.titulo}>TÍTULOS</Text>
            <ItemTitulo sede="Suécia" img3={um} img2={suecia} ano="1958"/>
            <ItemTitulo sede="Suécia" img3={um} img2={suecia} ano="1958"/>
            <ItemTitulo sede="Suécia" img3={um} img2={suecia} ano="1958"/>
            <ItemTitulo sede="Suécia" img3={um} img2={suecia} ano="1958"/>
            </ScrollView>
        </ImageBackground>
    )
}
