import axios from "axios";
import endpoint_tabela from "../dados/endpoints";
import api_key from "../dados/keys";

function CarregaTabela(setItensTabela) {
    axios.get(endpoint_tabela, {
      headers: {
        Authorization: "Bearer "+api_key
      }
    }).then((resultado) => {
      setItensTabela(resultado.data);
    }).catch((erro) => {
      console.log(erro);
    })
}

export default CarregaTabela;