import React from "react";
import { ScrollView, Text, Image, View } from "react-native";

import estilos from '../TelaSobre/estilos'

import ftcapa from '../../assets/foto-capa.jpg'
import rei from '../../assets/rei-de-monaco.png'
import chuva from '../../assets/rei-da-chuva.png'
import silver from '../../assets/silvastone.png'

export default function TelaSobre(){
    return(
        <View style={estilos.containerPai}>
            <View style={estilos.container}>
            <Text style={estilos.name}>Ayrton Senna</Text>
            <Image source={ftcapa} style={estilos.img}/>
            <Text style={estilos.content}>No esporte mais veloz e global do mundo,
                um piloto é considerado o mais rápido de todos os
                tempos: Ayrton Senna. Seus expressivos números ajudam
                a explicar o porque o piloto ganhou status de mito de esporte.
            </Text>
            </View>
            <ScrollView>
                <View style={estilos.cont1}>             
                <Image source={rei} style={estilos.img1}/>
                <View style={estilos.contInt}>
                <Text style={estilos.text}>Rei da Chuva</Text>
                <Text style={estilos.content1}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                </View>
                </View>
                <View style={estilos.cont1}>
                <Image source={chuva} style={estilos.img1}/>
                <View style={estilos.contInt}>
                <Text style={estilos.text}>Rei da Mônica</Text>
                <Text style={estilos.content1}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                </View>
                </View>
                <View style={estilos.cont1}>
                <Image source={silver} style={estilos.img1}/>
                <View style={estilos.contInt}>
                <Text style={estilos.text}>Rei de Silverstone</Text>
                <Text style={estilos.content1}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                </View>
                </View>
            </ScrollView>
        </View>
    )
}