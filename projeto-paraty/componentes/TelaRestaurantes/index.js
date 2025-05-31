import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./estilos";

import img1 from '../../assets/restaurantes/restaurante01.png'
import img2 from '../../assets/restaurantes/restaurante02.png'
import img3 from '../../assets/restaurantes/restaurante03.png'


export default function TelaRestaurante(){
    return(
        <ScrollView style={styles.container}>
        <View>
            <Text style={[styles.title]}>Bares e Restaurantes</Text>
            <Text style={[styles.content]}>O prazer da boa comida você encontra em Paraty.
                Com inúmeras opções de bares e restaurantes, a cidade oferece uma variedade de sabores que vão desde a culinária local até pratos internacionais.
            </Text>
        </View>
    
        <View style={styles.containerCard}>
            <View style={styles.card}>
                <Image source={img1} style={{height: 80, width: 300}}/>
                <Text style={styles.titleCard}>Armazém Mar</Text>
                <Text>Localização Rod. Rio</Text>
            </View>
            <View style={styles.card}>
                <Image source={img2} style={{height: 80, width: 300}}/>
                <Text style={styles.titleCard}>Bendita's Restaurante</Text>
                <Text>Localização Rua do Comércio</Text>
        </View>
        <View style={styles.card}>
            <Image source={img3} style={{height: 80, width: 300}}/>
            <Text style={styles.titleCard}>Sereia do Mar</Text>
            <Text>Localização Rua do Comércio</Text>
            </View>
        </View>
        </ScrollView>
    )
}