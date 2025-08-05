import { useFonts, Annie_UseYourTelescope_400Regular } from '@expo-google-fonts/annie-use-your-telescope';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

export default function App() {

const [loaded] = useFonts({
  Annie_UseYourTelescope_400Regular,
});

  if (!loaded) {
    return <View style={styles.container}><Text>Carregando fonte...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoQuadro}>Open up App.js to start working on your app!</Text>
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
  textoQuadro: {
    fontFamily: "Annie_UseYourTelescope_400Regular",
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    lineHeight: 65
  }
});
