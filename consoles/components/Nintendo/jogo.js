import { Text, View, Image } from "react-native";

import img from "../../assets/jogo/disc.png"
import img1 from "../../assets/jogo/money.png"
import img2 from "../../assets/jogo/ranking.png"
import img3 from "../../assets/jogo/sales.png"

import estilos from "../../assets/estilos/estilos"


export default function Jogo(){
    return(
    <View>
            <Text style={estilos.texto}>Super Mario bros</Text>
            <Text style={estilos.content}>Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.</Text>
            <Text style={estilos.content}>A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>40 milhões de cópias</Text>
                    <Text style={estilos.textCard}>Até 1994</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>US$ 72 milhões</Text>
                    <Text style={estilos.textCard}>Primeiros 4 meses</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>95% de Aprovação</Text>
                    <Text style={estilos.textCard}>Revista CVG</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Remake em 1993</Text>
                    <Text style={estilos.textCard}>Para o SNES</Text>
                </View>
            </View>
        </View>
    )
}