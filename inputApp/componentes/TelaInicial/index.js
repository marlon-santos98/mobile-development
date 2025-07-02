import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style={estilo.linhaInput}>
        <Text>Valor mínimo: </Text>
        <TextInput style={estilo.inputNormal}></TextInput>
      </View>

      <View style={estilo.linhaInput}>
        <Text>Valor máximo: </Text>
        <TextInput style={estilo.inputNormal}></TextInput>
      </View>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>{numeroSorteado}</Text>
      </View>

      <View style={estilo.boxBotao}>
        <Button title="Sortear" onPress={gerarNumero} color="#1f4f66"/>
      </View>
    </View>
  );
}

export default TelaInicial;


<TextInput 
  textAlign="left" />