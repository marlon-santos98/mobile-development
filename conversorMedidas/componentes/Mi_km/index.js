import { SafeAreaView, ImageBackground } from "react-native";
import background from "../../assets/background.jpg"
import estilo from "./estilo"

export default function  Mi_km(){
    return(
        <SafeAreaView>
            <ImageBackground source={background} blurRadius={150} style={estilo.container}>
            </ImageBackground>
        </SafeAreaView>
    )
}