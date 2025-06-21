import { Text, View, Image } from "react-native";

import img from "../../assets/jogo/disc.png"
import img1 from "../../assets/jogo/money.png"
import img2 from "../../assets/jogo/ranking.png"
import img3 from "../../assets/jogo/sales.png"

import estilos from "../../assets/estilos/estilos"


export default function Jogo(){
    return(
    <View>
            <Text style={estilos.texto}>Final Fantasy VII</Text>
            <Text style={estilos.content}>Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir: </Text>
            <Text style={estilos.content}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>2 milhões de cópias</Text>
                    <Text style={estilos.textCard}>Em 2 dias no Japão</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>US$ 115 milhões</Text>
                    <Text style={estilos.textCard}>Em 2 dias no Japão</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>92% de Aprovação</Text>
                    <Text style={estilos.textCard}>Metacritic</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Remake em 2020</Text>
                    <Text style={estilos.textCard}>Para o PS4</Text>
                </View>
            </View>
        </View>
    )
}