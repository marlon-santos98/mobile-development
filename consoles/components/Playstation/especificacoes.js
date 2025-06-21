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
            <Text style={estilos.content}>Confira a seguir as especificações técnicas do Playstation, lançado em 1994.</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Sony CXD8530BQ</Text>
                    <Text style={estilos.textCard}>33.8688 MHz</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Sony CXD8514Q</Text>
                    <Text style={estilos.textCard}>1MB VRAM</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>2 MB EDO DRAM</Text>
                    <Text style={estilos.textCard}>33 MHz</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Drive de CD-ROM</Text>
                    <Text style={estilos.textCard}>660 MB</Text>
                </View>
            </View>
        </View>
    )
}