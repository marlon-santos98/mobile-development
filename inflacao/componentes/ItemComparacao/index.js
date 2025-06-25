import { ScrollView, Text,  View } from "react-native";
import estilo from "./estilo"

export default function ItemComparacao(props){
    return(
        <ScrollView>
            <View style={estilo.container}>
                <Text>{props.ano}</Text>
                <Text>{props.salario}</Text>
                <Text>{props.crescimento}</Text>
                <Text>{props.inflacao}</Text>
                <Text>{props.status}</Text>
            </View>
        </ScrollView>
    )
}