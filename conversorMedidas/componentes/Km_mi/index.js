import { SafeAreaView, ImageBackground } from "react-native";
import background from "../../assets/background_b.jpeg"
import estilo from "./estilo"

export default function  Km_mi(){
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.container}>

            </ImageBackground>
        </SafeAreaView>
    )
}