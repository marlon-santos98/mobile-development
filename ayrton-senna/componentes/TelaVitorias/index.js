import React from "react";
import { View, Text, ImageBackground, ScrollView, Image } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import run from "../../assets/corrida1.jpg"
import v1 from "../../assets/vitoria1.jpg"
import v2 from "../../assets/vitoria2.jpg"
import v3 from '../../assets/vitoria3.jpg'

import estilos from "../TelaVitorias/estilos";

export default function TelaVitorias(){
    return(
        <ImageBackground source={run} style={estilos.fundo} blurRadius={2}>
            <ScrollView>
                <View style={estilos.container}>
                    <Text style={estilos.title}>Senna em números</Text>
                    <Text style={estilos.text}>Ele conquistou 3 campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 grandes prêmios e 65 Pole positions.</Text>

                    <View style={estilos.container2}>
                        <FontAwesome5 name="trophy" size={24} color="yellow" marginRight={10}/>
                        <Text style={estilos.text1}><Text style={estilos.span}>161 </Text>GPS DISPUTADOS</Text>
                    </View>
                    <View style={estilos.container2}>
                        <FontAwesome5 name="trophy" size={24} color="yellow" marginRight={10}/>
                        <Text style={estilos.text1}><Text style={estilos.span}>65 </Text>POLE POSITIONS</Text>
                    </View>
                    <View style={estilos.container2}>
                        <FontAwesome5 name="trophy" size={24} color="yellow" marginRight={10}/>
                        <Text style={estilos.text1}><Text style={estilos.span}>41 </Text>VITORIAS</Text>
                    </View>
                    <View style={estilos.container2}>
                        <FontAwesome5 name="trophy" size={24} color="yellow" marginRight={10}/>
                        <Text style={estilos.text1}><Text style={estilos.span}>3X </Text>CAMPEAO MUNDIAL</Text>
                    </View>
                </View>
                <View style={estilos.content}>
                    <Text style={estilos.textCont}>Campeonato Mundial - 1988</Text>
                    <Image source={v1}  style={estilos.img1}/>
                </View>
                <View style={estilos.content}>
                    <Text style={estilos.textCont}>Campeonato Mundial - 1990</Text>
                    <Image source={v2}  style={estilos.img1}/>
                </View>
                <View style={estilos.content}>
                    <Text style={estilos.textCont}>Campeonato Mundial - 1991</Text>
                    <Image source={v3}  style={estilos.img1}/>
                </View>
                
            </ScrollView>
        </ImageBackground>
    )
}