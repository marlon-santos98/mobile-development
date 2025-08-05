import { View, Text } from "react-native";
import styles from "./estilo"

export default function Casa(
{
    jogador = null,
    temBordaDireita = false,
    temBordaInferior = false,
    pecaVitoriosa = false
})
{
    const larguraBordaDireita = (temBordaDireita) ? 3 : 0;
    const larguraBordaInferior = (temBordaInferior) ? 3 : 0;
    const corTexto = (pecaVitoriosa) ? 'red' : 'black'

    return(
        <View style={[styles.coluna, {
            borderRightWidth: larguraBordaDireita,
            borderBottomWidth: larguraBordaInferior
        }]}>
            <Text style={styles.marcadorJogador}>{jogador}</Text>
        </View>
    )
}