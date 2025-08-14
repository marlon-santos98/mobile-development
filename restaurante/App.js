import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Aba = createMaterialTopTabNavigator()

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
