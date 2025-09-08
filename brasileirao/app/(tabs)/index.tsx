import { useEffect, useState } from 'react';
import { View } from 'react-native';

import CarregaTabela from '../../servico/servico_carregaTabela';

import Tabela from '../../components/Tabela';

import estilos from './estilos';

export default function App() {

  const [itensTabela, setItensTabela] = useState([]);

  useEffect(() => {
      CarregaTabela(setItensTabela);
  }, [])

  return (
    <View style={estilos.container}>
        <Tabela itensTabela={itensTabela} />
    </View>
  );
}