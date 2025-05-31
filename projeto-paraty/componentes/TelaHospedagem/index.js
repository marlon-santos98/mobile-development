import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import estilos from "./estilos"; // Importando os estilos, se necessário

import img1 from '../../assets/hospedagens/hospedagem01.png';
import img2 from '../../assets/hospedagens/hospedagem02.png';    
import img3 from '../../assets/hospedagens/hospedagem03.png';

export default function TelaHospedagem(){
    return(
        <ScrollView  style={estilos.container}>
            <View>
                <Text style={estilos.titulo}>Pousadas e Hotéis em Paraty</Text>
                <Text style={estilos.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200 a R$1500. Veja algumas pousadas abaixo:</Text>
            </View>
            <View style={estilos.hospedagemContainer}>
                <View style={estilos.card}>
                    <Image source={img1} style={{width: 250, height: 50}} />
                    <Text style={estilos.nomeHospedagem}>Hotel Pousada do Ouro</Text>
                    <Text style={estilos.precoHospedagem}>R$ 500,00</Text>
                    <Text style={estilos.localizacaoHospedagem}>Localização: Próximo ao porto</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={img2} style={{width: 250, height: 50}} />
                    <Text style={estilos.nomeHospedagem}>Pousada do Sandi</Text>
                    <Text style={estilos.precoHospedagem}>R$ 600,00</Text>
                    <Text style={estilos.localizacaoHospedagem}>Localização: Próximo ao porto</Text>

                </View>
                <View style={estilos.card}>
                    <Image source={img3} style={{width: 250, height: 50}} />
                    <Text style={estilos.nomeHospedagem}>Pousada Porto Imperial</Text>
                    <Text style={estilos.precoHospedagem}>R$ 700,00</Text>
                    <Text style={estilos.localizacaoHospedagem}>Localização: Próximo ao porto</Text>

                </View>
            </View>
        </ScrollView>
    )
}