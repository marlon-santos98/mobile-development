import { Text, ScrollView, View, SafeAreaView } from "react-native";

import ItemValor from "../ItemValor";
import estilo from "./estilo";


export default function Salario(){
    return(
        <SafeAreaView>
        <ScrollView>
            <View style={estilo.container}>
                <Text>Ano</Text>
                <Text>Salário</Text>
            </View>
            <ItemValor ano="2010" salario="5,91%"/>
            <ItemValor ano="2011" salario="6,50%"/>
            <ItemValor ano="2012" salario="5,84%"/>
            <ItemValor ano="2013" salario="5,91%"/>
            <ItemValor ano="2014" salario="6,41%"/>
            <ItemValor ano="2015" salario="10,67%"/>
            <ItemValor ano="2016" salario="6,29%"/>
            <ItemValor ano="2017" salario="2,95%"/>
            <ItemValor ano="2018" salario="3,75%"/>
            <ItemValor ano="2019" salario="4,31%"/>
            <ItemValor ano="2020" salario="4,52%"/>
        </ScrollView>
        </SafeAreaView>
    )
}