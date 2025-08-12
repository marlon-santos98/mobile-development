import { useState } from 'react';
import { TextInput, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { RetornaQuestao, VerificaRespostaCerta } from '../../servico/geraQuestao';
import ModalResposta from "../ModalResposta/index";

import estilos from './estilos';

import background from '../../assets/background.png';
import btn_responder from '../../assets/btn_responder.png';
import btn_proxima from '../../assets/btn_proxima.png';

export default function Quiz() {
  
  //State para definir o texto que será mostrado no modal
  const [mensagem, setMensagem] = useState();
  //State utilizado para controlar a exibição do modal
  const [modalVisibilidade, setModalVisibilidade] = useState(false);

  //state que armazena a resposta digitada pelo usuário
  const [respostaDigitada, setRespostaDigitada] = useState();
  //state que armazena um objeto contendo a questão (pergunta e resultado)
  const [questao, setQuestao] = useState(RetornaQuestao());
  
  function exibeMensagemAcerto(){
    setMensagem("Parabéns!\nVocê acertou!");
    setModalVisibilidade(true);
  }

  function exibeMensagemErro(){
    setMensagem("Poxa!\nVocê errou.");
    setModalVisibilidade(true);
  }

  //Função chamada quando o usuário clica no botão 'Responder'
  function RespondeQuestao() {
    //Verifica se o usuário respondeu corretamente e armazena true ou false na variável
    const respondeuCerto = VerificaRespostaCerta(respostaDigitada, questao.Resultado);

    if(respondeuCerto){
      exibeMensagemAcerto();
    } else {
      exibeMensagemErro();
    }

    //Uma nova questão é gerada após o usuário responder, independente de acerto ou erro
    ProximaQuestao();
  }

  //A função ProximaQuestao define uma nova questão, que conta com uma Pergunta e o seu Resultado
  function ProximaQuestao() {
    const proximaQuestao = RetornaQuestao();

    setQuestao(proximaQuestao);
    setRespostaDigitada();
  }
  
  return (
    <ImageBackground style={estilos.fundo} source={background}>
      <View>
        <View style={estilos.quadro}>
          <Text style={estilos.textoQuadro}>Pergunta</Text>
          <Text style={estilos.textoQuadro}>{questao.Pergunta}</Text>
          
          <TextInput 
            style={estilos.inputResposta} 
            defaultValue='' 
            keyboardType='number-pad' 
            onChangeText={
              valorInput => setRespostaDigitada(valorInput.replace(/[^0-9]/g, ''))
            } 
            value={respostaDigitada} 
          />

        </View>
      </View>
      <View style={estilos.areaBotoes}>
        <Pressable style={estilos.botao} onPress={RespondeQuestao}>
          <Image source={btn_responder} />
        </Pressable>
        <Pressable style={estilos.botao} onPress={ProximaQuestao}>
          <Image source={btn_proxima} />
        </Pressable>
      </View>
      <ModalResposta mensagem={mensagem} modalVisibilidade={modalVisibilidade} setModalVisibilidade={setModalVisibilidade}/>
    </ImageBackground>
  );
}