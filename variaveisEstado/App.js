import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App(props) {

  const [valor, setValor] = useState(0)

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * (101 -1) + 1)
    setValor(novoNumero)
  }
  return (
    <View style={styles.container}>
      <Text>{valor}</Text>
      <View>
          <Button title='Sortear' onPress={gerarNumero} color="#1f4f66"/>
      </View>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
