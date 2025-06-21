import {ScrollView, Text} from 'react-native'

import Jogo from "./jogo"
import Historia from './historia'
import Especificacoes from './especificacoes'
import Conclusao from './conclusao'

export default function Nintendo(){
    return(
        <ScrollView>
            <Historia/>
            <Especificacoes/>
            <Jogo/>
            <Conclusao/>
        </ScrollView>
    )
}