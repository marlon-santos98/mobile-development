import ItemTabela from '../ItemTabela';

export default function HeaderTabela(){
    return (
        <ItemTabela
            posicao="#"
            time="TIME"
            pontos="PTS"
            vitorias="V"
            empates="E"
            derrotas="D"
            gols_pro="GP"
            gols_contra="GC"
            saldo_gols="SG"
        />
    )
}