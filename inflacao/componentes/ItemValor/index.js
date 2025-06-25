import { ScrollView, Text,  View } from "react-native";
import estilo from "./estilo"

export default function ItemValor(props){
    return(
        <ScrollView>
            <View style={estilo.container}>
                <Text>{props.ano}</Text>
                <Text>{props.salario}</Text>
            </View>
        </ScrollView>
    )
}