import estilos from "../ItemLivro/estilos";
import { Text, View, Image } from "react-native";

export default function ItemLivro({ img, paginas, autor, titulo }) {
  return (
    <View style={estilos.container}>
        <View style={estilos.card}>
          <Image source={{ uri: img }} style={estilos.imagem} />
          <Text style={estilos.text}>Páginas: {paginas}</Text>
          <Text style={estilos.text}>Autor: {autor}</Text>
        </View>
        <Text style={estilos.titulo}>{titulo}</Text>
      </View>
  );
}


