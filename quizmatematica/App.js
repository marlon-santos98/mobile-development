import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from "./componentes/TelaInicio";
import Quiz from "./componentes/Quiz";

const Navegacao = createStackNavigator();

export default function App(){

  {  
    return(
        <NavigationContainer >
          <Navegacao.Navigator>
            <Navegacao.Screen name="Início" component = { Inicio } />
            <Navegacao.Screen name="Quiz" component = { Quiz } />
          </Navegacao.Navigator>
        </NavigationContainer>
    );
  }
}