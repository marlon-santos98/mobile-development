import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, FontAwesome5   } from "@expo/vector-icons"

const Abas = createBottomTabNavigator();

import Mi_km from "./componentes/Mi_km/index"
import Km_mi from './componentes/Km_mi/index';

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name='Quilômetros para Milhas' component={Km_mi}
          options={{
          tabBarIcon: ({color}) => (
            <Entypo name="ruler" size={24} color={color}/>
          ),
          headerShown: false
        }}
        />
        <Abas.Screen name='Milhas para Quilômetros' component={Mi_km}
          options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="ruler-combined" size={24} color={color} />
          ),
          headerShown: false
        }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
