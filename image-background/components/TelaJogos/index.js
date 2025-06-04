import React from "react";
import { ScrollView, Text, ImageBackground } from "react-native";
import img1 from "../../assets/jogo-3.png"
import img2 from "../../assets/jogo-2.png"
import img3 from "../../assets/jogo-4.png"

import estilos from "./estilo";

export default function TelaJogos() {
    return(
        <ScrollView style={estilos.container}>
            <Text style={estilos.textBold}>Jogos em 4k</Text>
            <Text style={estilos.textContent}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

            <ImageBackground 
                source={img1}
                style={{width: '100%', height: 200, justifyContent: 'center', alignItems: 'center'}}
            >
            <Text style={estilos.text}>Forza Horizon 5</Text>
            
            </ImageBackground>
            <Text style={estilos.textJogos}>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.</Text>
            
            <ImageBackground 
                source={img2}
                style={{width: '100%', height: 200, justifyContent: 'center', alignItems: 'center'}}
            >
            <Text style={estilos.text}>CyberPunk 2077</Text>
            </ImageBackground>
            <Text style={estilos.textJogos}>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>

            <ImageBackground 
                source={img3}
                style={{width: '100%', height: 200, justifyContent: 'center', alignItems: 'center'}}
            >
            <Text style={estilos.text}>Halo 5</Text>
            </ImageBackground>
            <Text style={estilos.textJogos}>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
        </ScrollView>
            
    )
}