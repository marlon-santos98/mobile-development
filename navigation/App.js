import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

import TelaContato from '../navigation/components/TelaContato/index';
import TelaPerfil from './components/TelaPerfil/index';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#fff'},
          tabBarActiveBackgroundColor: '#013987',
          tabBarLabelStyle: {fontSize: 14},   
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#013987',
          tabBarLabelPosition: 'beside-icon',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#4530b2'},
          headerTitleStyle: {color: 'white', fontSize: 25, fontWeight: 'bold'},
        }}
      >
        <Tabs.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome name="user" size={25} color={color} />
            )
          }}
          />
        <Tabs.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({color, size}) => (
              <AntDesign name="contacts" size={25} color={color}/>
            )
          }}
        />
        
      </Tabs.Navigator>
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
