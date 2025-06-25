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
            <ItemValor ano="2010" salario="R$ 510,00"/>
            <ItemValor ano="2011" salario="R$ 545,00"/>
            <ItemValor ano="2012" salario="R$ 622,00"/>
            <ItemValor ano="2013" salario="R$ 678,00"/>
            <ItemValor ano="2014" salario="R$ 724,00"/>
            <ItemValor ano="2015" salario="R$ 788,00"/>
            <ItemValor ano="2016" salario="R$ 880,00"/>
            <ItemValor ano="2017" salario="R$ 937,00"/>
            <ItemValor ano="2018" salario="R$ 954,00"/>
            <ItemValor ano="2019" salario="R$ 998,00"/>
            <ItemValor ano="2020" salario="R$ 1045,00"/>
        </ScrollView>
        </SafeAreaView>
    )
}