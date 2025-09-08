import estilos from "./estilos";
import { Text, View } from 'react-native';

export default function ItemTabela({ posicao, time, pontos, vitorias, empates, derrotas, gols_pro, gols_contra, saldo_gols }) {
    return (
        <View style={estilos.itemTabela} key={posicao}>
            <Text style={estilos.informacao}>{posicao}</Text>
            <Text style={estilos.nome}>{time}</Text>
            <Text style={estilos.informacao}>{pontos}</Text>
            <Text style={estilos.informacao}>{vitorias}</Text>
            <Text style={estilos.informacao}>{empates}</Text>
            <Text style={estilos.informacao}>{derrotas}</Text>
            <Text style={estilos.informacao}>{gols_pro}</Text>
            <Text style={estilos.informacao}>{gols_contra}</Text>
            <Text style={estilos.informacao}>{saldo_gols}</Text>
        </View>
    )
}