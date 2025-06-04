import {ImageBackground, Text, Image, View} from 'react-native';
import img1 from '../../assets/fundo-xcloud.png';
import img2 from '../../assets/xcloud-2.png';
import estilos from './estilo';

export default function TelaNuvem() {
    return(
        <ImageBackground source={img1} style={estilos.container}>
            <View style={estilos.content}>
            <Text style={estilos.title}>Xbox Cloud Gaming</Text>
            <Text style={estilos.titleh2}>Serviço de streaming de jogos</Text>
            <Text style={estilos.text}>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
            <Text style={estilos.text}>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
            <Text style={estilos.text}>Através de uma assinatura você terá um XBOX virtual sempre que precisar</Text>
            <Image
                source={img2}
                style={estilos.image}
            />
            </View>
        </ImageBackground>  
    )
}