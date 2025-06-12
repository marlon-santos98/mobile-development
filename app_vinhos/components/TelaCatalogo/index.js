import react from 'react'
import {ScrollView, Text, View, Image} from 'react-native'
import vinhoBranco from '../../assets/vinho-branco.jpg'
import vinhoEspecial from '../../assets/vinho-especial.jpg'
import vinhoRose from '../../assets/vinho-rose.jpg'
import vinhoSeco from '../../assets/vinho-seco.jpg'

import estilos from './estilos'

export default function TelaCatalogo(){
    return(
        <ScrollView style={estilos.container}>
            <Text style={estilos.mainTitle}>Nossos Vinhos</Text>
            <Text style={estilos.textTitle}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho Branco, vinho rosé, vinho tinto e vinho seco.</Text>
            <View style={estilos.cardContainer}>
                <Image
                    source={vinhoBranco}
                    style={estilos.image}
                    resizeMode='contain'
                />
                <View>
                <Text style={estilos.title}>Chatigny Chardonnay</Text>
                <Text style={estilos.textContainer}>Vinho leve, refrescante e levemente citrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>

            <View style={estilos.cardContainer}>
                <Image
                    source={vinhoEspecial}
                    style={estilos.image}
                    resizeMode='contain'
                />
                <View>
                <Text style={estilos.title}>Chatigny Chardonnay</Text>
                <Text style={estilos.textContainer}>Vinho leve, refrescante e levemente citrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>

            <View style={estilos.cardContainer}>
                <Image
                    source={vinhoRose}
                    style={estilos.image}
                    resizeMode='contain'
                />
                <View>
                <Text style={estilos.title}>Chatigny Chardonnay</Text>
                <Text style={estilos.textContainer}>Vinho leve, refrescante e levemente citrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>

            <View style={estilos.cardContainer}>
                <Image
                    source={vinhoSeco}
                    style={estilos.image}
                    resizeMode='contain'
                />
                <View>
                <Text style={estilos.title}>Chatigny Chardonnay</Text>
                <Text style={estilos.textContainer}>Vinho leve, refrescante e levemente citrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>

        </ScrollView>
    )
}