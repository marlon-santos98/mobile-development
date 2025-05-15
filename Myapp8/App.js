import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import img from '../Myapp8/assets/icon.png'
import foto from './assets/foto.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img}/>
      <Image source={foto} style={styles.foto}/>
      <Text style={styles.nome}>Marlon Santos</Text>
      <Text style={styles.texto}>Bacharel em Engenharia de Software e desenvolvedor Fullstack, especializado nas tecnologias PHP, JavaScript, Typescript, React e React Native.</Text>
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
  img: {
    height: 350,
  },
  foto:{
    borderRadius: 150,
    height: 100,
    width: 100,
    margin: 20,
  },
  nome: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center'
  }
});
