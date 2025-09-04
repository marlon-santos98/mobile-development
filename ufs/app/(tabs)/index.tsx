import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  Button,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Loading from "../../assets/images/anime1.gif";

const larguraTela = Dimensions.get("window").width;
const alturaTela = Dimensions.get("window").height;

export default function App() {
  const [isLoading, setIsLoading] = useState(null);
  const [listaUFs, setListaUFs] = useState(null);
  const [termo, setTermo] = useState(""); // Inicialize o estado termo
  useEffect(retornaListaUFs, []);

  function retornaListaUFs() {
    setIsLoading(true);
    axios
      .get("https://www.devmedia.com.br/projetos-api/ufs", {
        timeout: 30000,
      })
      .then((resposta) => {
        setListaUFs(resposta.data);
        setIsLoading(false);
      })
      .catch((respostaErro) => {
        if (respostaErro.response) {
          setIsLoading(false);
          if (respostaErro.response.status === 404) {
            console.log(respostaErro.response.data.erro);
          } else if (respostaErro.response.status === 500) {
            console.log(
              "Erro interno no servidor. Tente novamente mais tarde!"
            );
          }
        } else {
          if (respostaErro.request) {
            if (respostaErro.code === "ECONNABORTED") {
              console.log("Erro de timeout " + respostaErro.message);
            } else {
              console.log("Erro na requisição " + respostaErro.message);
            }
          } else {
            console.log("Erro inesperado " + respostaErro.message);
          }
        }
      });
  }

  function buscaUFs(termoDigitado) {
    setTermo(termoDigitado); // Atualize o estado termo
    if (termoDigitado === "") {
      setListaUFs(null);
      return;
    }
    setIsLoading(true);

    axios
      .get(
        `https://www.devmedia.com.br/projetos-api/ufs/?busca=${termoDigitado}`,
        {
          timeout: 30000,
        }
      )
      .then((response) => {
        setListaUFs(response.data);
      }).catch((respostaErro) => {
      if (respostaErro.response) {
        if (respostaErro.response.status === 404) {
          setListaUFs(null);
          setIsLoading(false);
        } else if (respostaErro.response.status === 500) {
          alert("Erro interno no servidor. Tente novamente mais tarde!");
        }
      } else {
        if (respostaErro.request) {
          if (respostaErro.code === "ECONNABORTED") {
            alert("Erro de timeout " + respostaErro.message);
          } else {
            alert("Erro na requisição " + respostaErro.message);
          }
        } else {
          alert("Erro inesperado " + respostaErro.message);
        }
      }
    });
  }

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputBusca}
        onChangeText={(termoDigitado) => buscaUFs(termoDigitado)}
      />
      {listaUFs !== null ? (
        <ScrollView>
          {listaUFs.map((uf) => (
            <View key={uf.id}>
              <Text style={styles.text}>{uf.nome}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <>
          {isLoading ? (
            <Image source={Loading} style={styles.Loading} />
          ) : (
            <Button
              onPress={retornaListaUFs}
              title="Listar UFs"
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    marginTop: 100,
  },
  Loading: {
    position: "absolute",
    top: alturaTela / 2 - 60,
    left: larguraTela / 2 - 60,
    width: 120,
    height: 120,
  },
  text: {
    color: "white",
    padding: 20,
    fontWeight: "bold",
  },
  container: {
    margin: 5,
  },
  InputBusca: {
    borderColor: "white",
    borderWidth: 1,
    width: 200,
    color: "white",
  },
  BotaoLista: {
    fontSize: 10,
  },
});
