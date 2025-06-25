import { Text, ScrollView, SafeAreaView, View } from "react-native";
import ItemComparacao from "../ItemComparacao";
import {AntDesign} from '@expo/vector-icons';
import estilo from "./estilo";

export default function SalarioInflacao(){
    return(
        <SafeAreaView>
        <ScrollView>
            <View style={estilo.container}>
                <Text style={estilo.text}>Ano</Text>
                <Text style={estilo.text}>Salário</Text>
                <Text style={estilo.text}>Cresc. Salarial</Text>
                <Text style={estilo.text}>Inflação</Text>
                <Text style={estilo.text}>Status salário</Text>
            </View>
            <ItemComparacao 
            ano="2010" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2011" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowdown" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2012" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2013" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowdown" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2014" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2015" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2016" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowdown" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2017" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2018" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2019" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
                        <ItemComparacao 
            ano="2020" 
            salario="R$ 510,00"
            crescimento="-"
            inflacao="5,91%"
            status={<AntDesign name="arrowup" size={24} color="black" />}/>
        </ScrollView>
        </SafeAreaView>
    )
}