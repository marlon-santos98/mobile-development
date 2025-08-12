import { Text, View, Image, ImageBackground, Pressable } from 'react-native';

import estilos from '../Quiz/estilos';

import background from '../../assets/background.png';
import btn_iniciar from '../../assets/btn_iniciar.png';

//Constante com o texto mostrado na tela inicial
const mensagem = "Quiz de\nMatemática";

export default function Inicio(props) {

    //Função para navegar para o Quiz ao clicar no botão Iniciar
    const iniciarQuiz = () => {
        props.navigation.navigate('Quiz');
    }

  return (
    <ImageBackground style={estilos.fundo} source={background}>
      <View style={estilos.quadro}>
        <Text style={estilos.textoQuadro}>{mensagem}</Text>
      </View>
      <View style={estilos.areaBotoes}>
        <Pressable style={estilos.botao} onPress={iniciarQuiz}>
          <Image source={btn_iniciar} />
        </Pressable>
      </View>
    </ImageBackground>
  );
}