import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import img from './assets/moon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Lua</Text>
        <Text style={styles.texto}>A lua é o satélite natural do <Text style={styles.destaque}>planeta terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  img:{
    width: 100,
    height: 100,
    marginBottom: 50
  },
  boxTexto: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  titulo:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  texto:{
    textAlign: 'center',
    fontSize: 13
  }, 
  destaque:{
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
