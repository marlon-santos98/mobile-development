import React from 'react';
import { View } from 'react-native';

import Card from './components/card';
import Conteudo from './components/content';
import BarraTitulo from './components/titleBar';

import estilos from './styles';

export default function App() {
  return (
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}