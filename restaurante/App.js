import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Inicio from './components/Inicio';
import Categorias from './components/Categoria';
import screenOptions from "./utils/screenOptions"

const Aba = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={screenOptions}>
        <Aba.Screen name="Inicio" component={Inicio}/>
        <Aba.Screen name="Roll" component={Inicio}/>
        <Aba.Screen name="Sushi" component={Inicio}/>
        <Aba.Screen name="Yakitori" component={Inicio}/>
        <Aba.Screen name="Yakisoba" component={Inicio}/>
        <Aba.Screen name="Sashimi" component={Inicio}/>
        <Aba.Screen name="Temaki" component={Inicio}/>
        <Aba.Screen name="Cogumelo" component={Inicio}/>
      </Aba.Navigator>
    </NavigationContainer>
  );
}
