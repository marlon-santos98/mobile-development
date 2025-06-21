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
            <Text style={estilos.content}>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Image source={img} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>Intel Pentium 3</Text>
                    <Text style={estilos.textCard}>733 MHz</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img1} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>nVidia NV2A</Text>
                    <Text style={estilos.textCard}>233 MHz</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>64 MB DDR SDRAM</Text>
                    <Text style={estilos.textCard}>200 MHz</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={estilos.imgCard}/>
                    <Text style={estilos.textCard}>HD 8GB</Text>
                    <Text style={estilos.textCard}>5400 RPM</Text>
                </View>
            </View>
        </View>
    )
}