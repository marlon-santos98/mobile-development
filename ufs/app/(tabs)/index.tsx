import React, { use, useState } from "react";
import axios from "axios";
import { Button, Text, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export default function App() {

  const [listaUFs, setListaUFs] = useState(null)
  
  function retornaListaUFs() {
    axios
      .get("https://www.devmedia.com.br/projetos-api/ufs", {
        timeout: 30000,
        //params: {
        //busca: 'Sa'
        //}
      })
      .then((resposta) => {
        setListaUFs(resposta.data)
      })
      .catch((respostaErro) => {
        if (respostaErro.response) {
          //bloco que retorna um erro de acordo com o codigo de status enviado pela API
          if (respostaErro.response.status === 404) {
            console.log(respostaErro.response.data.erro);
          } else if (respostaErro.response.status === 500) {
            console.log(
              "Erro interno no servidor. Tente novamente mais tarde!"
            );
          }
        } else {
          //bloco que retorna uma mensagem caso não exista nenhum erro retornado pela API
          if (respostaErro.request) {
            if (respostaErro.code === "ECONNABORTED") {//-> N é um cód de status da API nem faz parte do REST

              console.log("Erro de timeout " + respostaErro.message); //personalizando mensagem de erro 
                                                                      //para casos de timeout
            } else {
              console.log("Erro na requisição " + respostaErro.message);
            }
          } else {
            console.log("Erro inesperado " + respostaErro.message);
          }
        }
      });
  }

  // const [soma, setSoma] = useState(0);

  // function somaNum() {
  //   let num = setSoma(soma + 1);
  //   return num;
  // }

  return (
      <ScrollView contentContainerStyle={styles.titleContainer}>
        {
          (listaUFs === null) ?
        <Button title="Listar UFs" onPress={retornaListaUFs}/>
         :
            listaUFs.map((uf)=>(
              <View key={uf.id}>
                <Text style={styles.text}>{uf.nome}</Text>
              </View>
            ))
          }    


        {/* <Button title="Consumir API" onPress={listarUFs} /> */}
        {/* <Text style={styles.text}>{soma}</Text>
        <Button title="Somar 1 unidade" onPress={somaNum} /> */}


      </ScrollView>
  )}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    color: "white",
    padding: 20,
    fontWeight: "bold",
  },
  container:{
    margin: 5
  }
});
