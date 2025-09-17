import react, {useState, useEffect} from "react"
import { Text, View, Button } from "react-native";

import CarregaLivros from "../servico/carregaLivros/servico_carregaLivros"
import Livro from "../components/Livros"
import  Titulo  from "../../star/components/Header/index";

export default function Index() {
  
  const [itensLivro, setItensLivro] = useState([])

  useEffect(()=>{
    CarregaLivros(setItensLivro)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEFEFE"
      }}
    >
      <Titulo/>
      <Livro itensLivro={itensLivro}/>
      {/* <ItemDescricao itensLivro={itensLivro}/> */}
    </View>
  );
}
