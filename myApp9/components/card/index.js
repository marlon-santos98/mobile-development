import React from "react";

import { View, Text, Image } from "react-native";
//import Foto from '../../assets/Foto.png'
import styles from './styles'

export default function(){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                {/* <Image source={Foto} style={styles.fotoCapa}/> */}
                <Text style={styles.nome}>Samuel Jackson</Text>
                <Text style={styles.paragrafo}>Ator e produtor norte Americano</Text>
            </View>
        </View>
    )
}