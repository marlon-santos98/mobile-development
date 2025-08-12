import { Modal, View, Text, Pressable } from 'react-native';
import estilos from './estilos';

export default function ModalResposta({mensagem, modalVisibilidade, setModalVisibilidade}) {

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisibilidade} onRequestClose={() => setModalVisibilidade(false)}>
      <View style={estilos.quadro}>
        <Pressable onPress={() => setModalVisibilidade(false)}>
          <Text style={estilos.botaoFechar}>X</Text>
        </Pressable>
        <View>
          <Text style={estilos.textoQuadro}>{mensagem}</Text>
        </View>
      </View>
    </Modal>
  );
}