import React from "react";
import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native";

import paraty from '../../assets/01.png'

export default function TelaInicial(props){
    return(
            <View>
                <View style={styles.container}>
                    <Text>Paraty</Text>
                    <Text>Saiba o que visitar em Paraty.</Text>
                    <Image source={paraty}/>
                </View>
                <View>
                    <Button
                        title="Ver Restaurantes"
                        onPress={() => props.navigation.navigate('TelaRestaurantes')}
                    />
                </View>
                <View>
                <Button
                    title="Ver Hospedagem"
                    onPress={() => props.navigation.navigate('TelaHospedagem')}
                />
                </View>
                <View>
                <Button
                    title="Ver Passeios"
                    onPress={() => props.navigation.navigate('TelaPasseios')}
                />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    }
})