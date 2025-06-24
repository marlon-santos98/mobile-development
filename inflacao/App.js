import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome, Feather, AntDesign } from '@expo/vector-icons';


import Inflacao from "./componentes/Inflacao/index"
import Salario from "./componentes/Salario/index"
import SalarioInflacao from "./componentes/SalarioInflacao/index"

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen 
        name="Inflação" 
        component={Inflacao} 
          options={{
          tabBarIcon: ({color}) => (
          <Feather name="percent" size={24} color={color}/>
          ),
        }}/>
        <Abas.Screen 
        name="Salário" 
        component={Salario}
          options={{
          tabBarIcon: ({color}) => (
          <FontAwesome name="money" size={24} color={color} />
          ),
        }}/>
        <Abas.Screen 
        name="Salário x Inflação" 
        component={SalarioInflacao}
        options={{
          tabBarIcon: ({color}) => (
          <AntDesign name="linechart" size={24} color={color} />
          ),
        }}/>
      </Abas.Navigator>
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
