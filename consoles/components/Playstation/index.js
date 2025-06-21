import {ScrollView} from 'react-native'
import estilos from "../../assets/estilos/estilos"

import Jogo from "./jogo"
import Historia from './historia'
import Especificacoes from './especificacoes'
import Conclusao from './conclusao'

export default function Nintendo(){
    return(
        <ScrollView  style={estilos.container}> 
            <Historia/>
            <Especificacoes/>
            <Jogo/>
            <Conclusao/>
        </ScrollView>
    )
}