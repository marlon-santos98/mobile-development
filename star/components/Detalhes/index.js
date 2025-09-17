import { ScrollView, View, Image, Text } from "react-native";

export default function Detalhes({capa, titulo, descricao}){
    return(
        <ScrollView>
            <Image source={{uri: capa}}/>
            <View>
                <Text>{titulo}</Text>
                <Text>{descricao}</Text>
            </View>
        </ScrollView>
    )
}