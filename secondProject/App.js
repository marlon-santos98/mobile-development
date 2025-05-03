import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function App(){
  return(

    <View style={estilos.container}>
      <Text style={estilos.texto}>Hello World!</Text> 
      <Text>Criado por DevMedia</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 25,
    color: 'white'
  },
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})