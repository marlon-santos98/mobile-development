import react from 'react'
import {View, Text, ScrollView} from 'react-native'
import {FontAwesome, Ionicons, MaterialCommunityIcons, SimpleLineIcons  } from '@expo/vector-icons/';


export default function TelaContato(){
    return(
        <ScrollView>
            <Text>Entre em contato para comprar nossos produtos</Text>
            <View>
                <FontAwesome name="phone" size={24} color="black" />
                <Text>Telefone: </Text>
                <Text>+55 21 00000000</Text>
            </View>
            <View>  
                <Ionicons name="location-sharp" size={24} color="black" />
                <Text>Endereço: </Text>
                <Text>Av. 123, 222 - Rio de Janeiro RJ</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="email-multiple-outline" size={24} color="black" />
                <Text>E-mail: </Text>
                <Text>preferida@adega.com.br</Text>
            </View>
            <View>
                <SimpleLineIcons name="social-instagram" size={24} color="black" />
                <Text>Instagram: </Text>
                <Text>@adegapreferida</Text>
            </View>
        </ScrollView>
    )
}