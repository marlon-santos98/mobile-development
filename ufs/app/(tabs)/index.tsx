import React, { useState, useEffect } from "react";
import {View} from "react-native";
import {servico_buscaUFs, servico_retornaUFs} from "../../servico/consultaUFs"
import Busca from "../../componentes/Busca/index"
import Loading from "../../componentes/Loading/index"
import ListagemUFs from "../../componentes/ListagemUFs/index"

export default function App() {

  const [listaUFs, setListaUFs] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect((retornaListaUFs), [])

  function retornaListaUFs(){
    servico_retornaUFs(setListaUFs, setIsLoading);
  }

  function buscaUFs(termo) {
    servico_buscaUFs(termo, setListaUFs, setIsLoading);
  }

  return(
    <View>
      <Busca mostraBotao={!isLoading && listaUFs === null} retornaListaUFs={retornaListaUFs} buscaUFs={buscaUFs}/>
      <ListagemUFs listaUFs={listaUFs} />
      <Loading isLoading={isLoading} />
    </View>
  )
}
