import react from 'react'
import {View, Text, ScrollView} from 'react-native'
import {FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons  } from '@expo/vector-icons/';

import estilos from './estilos';


export default function TelaContato(){
    return(
        <ScrollView>
            <View style={estilos.scrool}>
            <Text style={estilos.title}>Entre em contato para comprar nossos produtos</Text>
            <View style={estilos.cardContainer}>
                <FontAwesome name="phone" size={30} color="black" style={estilos.textCard}/>
                <Text style={estilos.textCard}>Telefone: </Text>
                <Text style={estilos.textCard}>+55 21 00000000</Text>
            </View>
            <View style={estilos.cardContainer}>  
                <Ionicons name="location-sharp" size={30} color="black" style={estilos.textCard}/>
                <Text style={estilos.textCard}>Endereço: </Text>
                <Text style={estilos.textCard}>Av. 123, 222 - Rio de Janeiro RJ</Text>
            </View>
            <View style={estilos.cardContainer}>
                <MaterialCommunityIcons name="email-multiple-outline" size={30} color="black" style={estilos.textCard}/>
                <Text style={estilos.textCard}>E-mail: </Text>
                <Text style={estilos.textCard}>preferida@adega.com.br</Text>
            </View>
            <View style={estilos.cardContainer}>
                <SimpleLineIcons name="social-instagram" size={30} color="black" style={estilos.textCard}/>
                <Text style={estilos.textCard}>Instagram: </Text>
                <Text style={estilos.textCard}>@adegapreferida</Text>
            </View>
            </View>
        </ScrollView>
    )
}