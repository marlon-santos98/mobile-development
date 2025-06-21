import { Text, View, Image } from "react-native";

import img from "../../assets/jogo/disc.png"
import img1 from "../../assets/jogo/money.png"
import img2 from "../../assets/jogo/ranking.png"
import img3 from "../../assets/jogo/sales.png"

import estilos from "../../assets/estilos/estilos"


export default function Jogo(){
    return(
    <View>
            <Text style={estilos.texto}>O fenômeno Halo</Text>
            <Text style={estilos.content}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.</Text>
            <Text style={estilos.content}>Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>4.7 milhões de cópias</Text>
                    <Text style={estilos.textCard}>Até Julho de 2006</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>US$ 170 milhões</Text>
                    <Text style={estilos.textCard}>Apenas nos EUA</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>97% de Aprovação</Text>
                    <Text style={estilos.textCard}>Metacritic</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Remake em 2014</Text>
                    <Text style={estilos.textCard}>Para o Xbox One</Text>
                </View>
            </View>
        </View>
    )
}