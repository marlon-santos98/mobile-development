import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import TelaInicio from './componentes/TelaInicio';
import TelaTabuada from './componentes/TelaTabuada';
import TelaRespostaCorreta from './componentes/TelaRespostaCorreta';
import TelaRespostaErrada from './componentes/TelaRespostaErrada';

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer >
    <Navegacao.Navigator screenOptions={{ headerShown: false }}>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } />
      <Navegacao.Screen name="Tabuada" component = { TelaTabuada } />
      <Navegacao.Screen name="RespostaCorreta" component = { TelaRespostaCorreta } />
      <Navegacao.Screen name="RespostaErrada" component = { TelaRespostaErrada } />
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;