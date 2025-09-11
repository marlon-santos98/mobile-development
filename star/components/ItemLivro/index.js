import estilos from "./estilos"
import {Text, View, Image} from 'react-native'

export default function ItemLivro({img, paginas, autor, titulo }){
    return(
        <View>
            <Image source={{uri: img}}/>
            <Text>{paginas}</Text>
            <Text>{autor}</Text>
            <Text>{titulo}</Text>
        </View>
    )
}