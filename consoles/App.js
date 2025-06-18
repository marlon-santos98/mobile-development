import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, Image } from 'react-native';


import TelaNintendo from "./components/Nintendo"
import TelaPlaystation from "./components/Playstation/index"
import TelaXbox from "./components/Xbox/index"

import img1 from "./assets/nintendo.png"
import img2 from "./assets/ps.png"
import img3 from "./assets/xbox.png"

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen 
        name="Nintendo" 
        component={TelaNintendo}
        options={{
          tabBarIcon: () => (
            <Image source={img1}/>
          )
        }}
        />
        <Abas.Screen name="Playstation" 
        component={TelaPlaystation}
        options={{
          tabBarIcon: () => (
            <Image source={img2}/>
          )
        }}
        />
        <Abas.Screen 
        name="Xbox" 
        component={TelaXbox}
        options={{
          tabBarIcon: () => (
            <Image source={img3}/>
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
