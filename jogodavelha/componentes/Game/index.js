import { useState } from "react";
import { Text, View, Pressable, Button } from "react-native";
import Casa from "../Casa/"
import styles from "./estilo"

import { verificaResultado } from "../../servico/logica";

export default function Game(){
    const [posicaoJogo, setPosicaoJogo] = useState(new Array(9))
    const [jogadorAtual, setJogadorAtual] = useState("X")

    const [venceuJogo, setVenceuJogo] = useState(false)
    const [empatouJogo, setEmpatouJogo] = useState(false)

    const [posicaoVitoria, setPosicaoVitoria] = useState(new Array(9))

    function defineCasaEscolhida(casa){
        let novoArrayPosicao = posicaoJogo
        novoArrayPosicao[casa] = jogadorAtual
        setPosicaoJogo(novoArrayPosicao)
    }

    function defineJogadorAtual(){
        const proximoJogador = (jogadorAtual == 'X' ? 'O' : 'X')
        setJogadorAtual(proximoJogador)
    }

    function handleEscolheCasa(casa){
        if(posicaoJogo[casa] !== undefined || venceuJogo){
            return
        }
        defineCasaEscolhida(casa)
        defineJogadorAtual()
        const resultado = verificaResultado(posicaoJogo)

        setVenceuJogo(resultado.venceu)
        setEmpatouJogo(resultado.empatou)
    }

    function handleReiniciarPartida(){
        setJogadorAtual("X")
        setPosicaoJogo(new Array(9))
        setVenceuJogo(false)
        setEmpatouJogo(false)
    }


    return(
        <View style={styles.container}>
            <Text>Jogo da Velha</Text>
            <Text>Jogador da vez: {jogadorAtual}</Text>
            {
                (venceuJogo) ? 
                <View style={styles.areaReinicio}>
                    <Text style={styles.status}>Vitória</Text>
                </View>
                : ""
            }
            {
                (empatouJogo) ? 
                <View style={styles.areaReinicio}>
                    <Text style={styles.status}>Empate!</Text>
                </View>
                : ""
            }
            {
                (venceuJogo || empatouJogo) ?
                <Button title="Reiniciar Partida" onPress={handleReiniciarPartida}/>
                : ""
            }
            <View style={styles.tabuleiro}>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(0)}>
                    <Casa
                        temBordaDireita={true}
                        temBordaInferior={true}
                        jogador={posicaoJogo[0]}
                    />
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(1)}>
                    <Casa temBordaDireita={true} temBordaInferior={true} jogador={posicaoJogo[1]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(2)}>
                    <Casa temBordaInferior={true} jogador={posicaoJogo[2]}/>
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(3)}>
                    <Casa temBordaDireita={true} temBordaInferior={true} jogador={posicaoJogo[3]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(4)}>
                    <Casa temBordaDireita={true} temBordaInferior={true} jogador={posicaoJogo[4]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(5)}>
                    <Casa temBordaInferior={true} jogador={posicaoJogo[5]}/>
                    </Pressable>
                </View>
                <View style={styles.linha}>
                    <Pressable onPress={() => handleEscolheCasa(6)}>
                    <Casa temBordaDireita={true} jogador={posicaoJogo[6]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(7)}>
                    <Casa temBordaDireita={true} jogador={posicaoJogo[7]}/>
                    </Pressable>
                    <Pressable onPress={() => handleEscolheCasa(8)}>
                    <Casa  jogador={posicaoJogo[8]}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}