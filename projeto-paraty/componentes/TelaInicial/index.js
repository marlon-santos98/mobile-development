import { View, Text, Image, Button } from "react-native";

import paraty from '../../assets/01.png'

import styles from './estilos';

export default function TelaInicial(props){
    return(
            <View style={styles.container}>
                <View style={styles.card}>
                <View style={[styles.textCard]}>
                    <Text  style={[styles.text1]}>Paraty</Text>
                    <Text  style={[styles.text]}>Saiba o que visitar em Paraty.</Text>
                </View>
                <Image
                    source={paraty}
                    style={{ width: 230, height: 200}}/>
                <View style={styles.title}>
                    <Button
                        title="Ver Restaurantes"
                        onPress={() => props.navigation.navigate('TelaRestaurantes')}
                    />
                <Button
                    title="Ver Hospedagem"
                    onPress={() => props.navigation.navigate('TelaHospedagem')}
                />
                <Button
                    title="Ver Passeios"
                    onPress={() => props.navigation.navigate('TelaPasseios')}
                />
                </View>
                </View>
            </View>
    )
}