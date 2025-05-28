import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial';
import TelaRestaurantes from '../projeto-paraty/componentes/TelaRestaurantes'
import TelaHospedagem from '../projeto-paraty/componentes/TelaHospedagem'
import TelaPasseios from '../projeto-paraty/componentes/TelaPasseios/index'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={TelaInicial}/>
        <Stack.Screen name='TelaPasseios' component={TelaPasseios}/>
        <Stack.Screen name='TelaRestaurantes' component={TelaRestaurantes}/>
        <Stack.Screen name='TelaHospedagem' component={TelaHospedagem}/>
      </Stack.Navigator>
    </NavigationContainer>
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
