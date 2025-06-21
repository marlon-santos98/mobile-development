import { Text, View, Image } from "react-native";
import estilos from "../../assets/estilos/estilos"

import img from "../../assets/especificacoes/cpu.png"
import img1 from "../../assets/especificacoes/gpu.png"
import img2 from "../../assets/especificacoes/hdd.png"
import img3 from "../../assets/especificacoes/ram.png"

export default function Especificacoes(){
    return(
        <View>
            <Text style={estilos.texto}>Especificações Técnicas</Text>
            <Text style={estilos.content}>Confira a seguir as especificações técnicas do Xbox do NES, lançado em 1983.</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Ricoh 24A03</Text>
                    <Text style={estilos.textCard}>Processador 8-bit</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>52 Cores</Text>
                    <Text style={estilos.textCard}>256 x 240</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>2KB RAM</Text>
                    <Text style={estilos.textCard}>Memória</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Cartucho</Text>
                    <Text style={estilos.textCard}>Proprietário</Text>
                </View>
            </View>
        </View>
    )
}