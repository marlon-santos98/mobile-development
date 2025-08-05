import React from "react";
import { useFonts, AnnieUseYourTelescope } from "expo-google-fonts/dev";
import estilos from "../../estilos"
import { useFonts, Annie_UseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaInicio() {
const [loaded] = useFonts({
  Annie_UseYourTelescope_400Regular,
});

  if (!loaded) {
    return <View style={styles.container}><Text>Carregando fonte...</Text></View>;
  }

  return(
    <View>
        <Text>Tela Inicio</Text>
    </View>
  )
}


