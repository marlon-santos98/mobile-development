import React from "react";
import { View, Text } from "react-native";
import styles from './styles'

export default function titleBar(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ator famoso</Text>
        </View>
    )
}