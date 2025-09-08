import { Dimensions, StyleSheet } from 'react-native';

const larguraTela = Dimensions.get('window').width;

const estilos = StyleSheet.create({
  itemTabela: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  informacao: {
    backgroundColor: '#60a480',
    width: 36,
    height: 36,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  nome: {
    backgroundColor: '#587fb3',
    width: larguraTela - 307,
    height: 36,
    color: 'white',
    textAlignVertical: 'center',
    paddingLeft: 12
  }
});

export default estilos;