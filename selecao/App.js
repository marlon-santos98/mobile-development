import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

//components
import TelaInicio from './componentes/TelaInicio';
import TelaArtilheiros from './componentes/TelaArtilheiros';
import TelaFinais from './componentes/TelaFinais';
import TelaTitulos from './componentes/TelaTitulos';

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer >
    <Navegacao.Navigator>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } />
      <Navegacao.Screen name="Artilheiros" component = { TelaArtilheiros } />
      <Navegacao.Screen name="Finais" component = { TelaFinais } />
      <Navegacao.Screen name="Titulos" component = { TelaTitulos } />
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;
