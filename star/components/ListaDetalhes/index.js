import { useEffect, useState } from "react";
import { View } from "react-native";

import { servico_carregaDetalhesLivro } from "../../servico/servico_InformacoesLivro/servico_InformacoesLivro";
import Detalhes from "../Detalhes";

export default function ListaDetalhes({route}){

    const {idLivro} = route.params
    const [detalhesLivro, setDetalhesLivro] = useState([])
    
    useEffect(()=>{
        if(idLivro === null || typeof idLivro === "undefined"){
            return
        }

        servico_carregaDetalhesLivro(idLivro, setDetalhesLivro)
    })
    return(
        <>
            <View>
                {
                    typeof detalhesLivro.volumeInfo !== "undefined" ? 
                    <Detalhes capa={detalhesLivro.volumeInfo.imageLinks.large}  titulo={detalhesLivro.volumeInfo.title} descricao={formata_sinopse(detalhesLivro.volumeInfo.description)}/>
                    :
                    <></>
                }
            </View>
        </>
    )
}