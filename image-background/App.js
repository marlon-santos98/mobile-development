import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "../image-background/components/TelaInicial";
import TelaJogos from "../image-background/components/TelaJogos";
import TelaNuvem from "../image-background/components/TelaNuvem";
import TelaConsoles from "../image-background/components/TelaConsoles";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="TelaJogos" component={TelaJogos} />
                <Stack.Screen name="TelaNuvem" component={TelaNuvem} />
                <Stack.Screen name="TelaConsoles" component={TelaConsoles} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
