import { Text, View, ImageBackground, ScrollView } from "react-native";
import estilo from "./estilo"

import {filtroSugestao} from "../../servico/index"

export default function Categorias({route, nome, descricao, imagem}){

    const categoria = route.params.categoria
    const produtosCategoria = filtroCategoria(categoria)

    return(
        <ScrollView style={estilo.container}>
            <Image source={imagem}/>
            <Text>{nome}</Text>
            <Text>{descricao}</Text>
        </ScrollView>
    )
}