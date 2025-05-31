import { View, Text, Image } from "react-native";
import estilos from './estilos';
import { ScrollView } from 'react-native';

import img1 from '../../assets/passeios/passeio01.png';
import img2 from '../../assets/passeios/passeio02.png';  
import img3 from '../../assets/passeios/passeio03.png';  


export default function TelaPasseios(){
    return(
        <ScrollView style={estilos.container}>
            <View>
                <Text style={estilos.title}>Passeios em Paraty</Text>
                <Text style={estilos.content}>Conheça os melhores passeios em Paraty, Paraty tem os melhores passeios do pais. As melhores e mais lindas paisagens do pais.</Text>
            </View>
            <View style={estilos.containerCard}>
                <View style={estilos.card}>
                    <Text style={estilos.titleCard}>Tirolesa</Text>
                    <Image source={img1} style={{height: 80, width: 250}}/>
                </View>
                <View style={estilos.card}>
                    <Text style={estilos.titleCard}>Rafting</Text>
                    <Image source={img2} style={{height: 80, width: 250}}/>
            </View>
            <View style={estilos.card}> 
                    <Text style={estilos.titleCard}>Canoagem no mangue</Text>
                    <Image source={img3} style={{height: 80, width: 250}}/>
                </View>
            </View>
        </ScrollView>
    )
}