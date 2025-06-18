import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, AntDesign, FontAwesome5   } from "@expo/vector-icons"

import TelaInicio from './componentes/TelaInicio';
import TelaSobre from './componentes/TelaSobre';
import TelaVitorias from './componentes/TelaVitorias';

const Abas = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator screenOptions={
      {
        headerStyle:{
          backgroundColor: '#eecb01'
        },  
        headerTitleStyle:{
          color: "#000",
          fontWeight: 'bold'
        },
        
        tabBarActiveTintColor: '#ba171a',
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: { backgroundColor: "#eecb01"},
      }
      }>
        <Abas.Screen 
        name='Início' 
        component={TelaInicio}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={20}/>
          ),
        }}
        />
        <Abas.Screen 
        name='Sobre' 
        component={TelaSobre}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="questioncircleo" size={20} color={color} />
          ),
        }}
        />
        <Abas.Screen 
        name='Vitórias' 
        component={TelaVitorias}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="trophy" color={color} size={20} />
          )
        }}
        />
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
