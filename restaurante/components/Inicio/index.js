import { useState } from "react";
import { Text, View, ScrollView , Image, TextInput} from "react-native";
import estilo from "./estilo"

import logo from "../../assets/logo.png"
import cardapio from "../../dados/cardapio";

export default function Inicio(){

    const [busca, setBusca] = useState()
    const [sugestao, setSugestao] = useState(cardapio)

    return(
        <ScrollView style={estilo.container}>
            <View style={estilo.imgView}>
                <Image source={logo} style={estilo.img}/>
                <Text style={estilo.title}>CARDÁPIO JAPONÊS</Text>
            </View>
            <TextInput
                style={estilo.input}
                placeholder="O que você procura?"
                value={busca}
            />
            {
                
                cardapio
                .filter((prato) => prato.pratoSugerido)
                .map((prato) => (
                    <View key={prato.nome}>  
                        <View  style={estilo.card}>
                            <Image source={prato.imagem} style={estilo.cardImg}/>
                            <View style={estilo.cardText}>
                                <Text style={estilo.titleText}>{prato.nome}</Text>
                                <Text style={estilo.textoCard}>{prato.descricao}</Text>
                            </View>
                        </View>
                    </View>
                ))
                }
            
        </ScrollView>
    )
}