import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Tab1 from './Components/Tab1';
import Tab2 from './Components/Tab2';
import { NavigationContainer } from '@react-navigation/native';

const Abas = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name="Tab1" component={Tab1}/>
        <Abas.Screen name="Tab2" component={Tab2}/>
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
