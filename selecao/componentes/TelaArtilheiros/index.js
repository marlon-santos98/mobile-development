import { View,ScrollView, Text, ImageBackground } from "react-native";
import fundo from "../../assets/background.png"

//photos
import ronaldo from "../../assets/artilheiros/ronaldo.png"
import pele from "../../assets/artilheiros/pele.png"
import ademir from "../../assets/artilheiros/ademir.png"
import vava from "../../assets/artilheiros/vava.png"
//components
import ItemArtilheiros from "./itemArtilheiro"

//estilos
import estilo from "../../assets/estilos";

export default function TelaFinais(){
    return(
        <ScrollView>
        <ImageBackground source={fundo} style={estilo.fundo}>
            <Text style={estilo.titulo}>ARTILHEIROS</Text>
            <ItemArtilheiros  img2={ronaldo} jogador="RONALDO" gols="15 GOLS" ano='1994 - 1998 - 2002 - 2006'/>
            <ItemArtilheiros img2={pele} jogador="PELE" gols="15 GOLS" ano='1994 - 1998 - 2002 - 2006'/>
            <ItemArtilheiros img2={ademir} jogador="ADEMIR" gols="15 GOLS" ano='1994 - 1998 - 2002 - 2006'/>
            <ItemArtilheiros img2={vava} jogador="VAVA" gols="15 GOLS" ano='1994 - 1998 - 2002 - 2006'/>
        </ImageBackground>
        </ScrollView>
    )
}
