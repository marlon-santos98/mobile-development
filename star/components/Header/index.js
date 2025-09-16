import { View, Text } from "react-native"
import estilo from "./estilos"

export default function Header(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.texto}>STAR WARS</Text>
        </View>
    )
}