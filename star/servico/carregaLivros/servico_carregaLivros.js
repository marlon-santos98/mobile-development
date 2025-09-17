import {endpoint_principal} from "../../endpoints/endpoints"
import axios from "axios";

function CarregaLivros(setItensLivro){
    axios.get(endpoint_principal, {
        timeout:30000
    }).then((resposta)=>{
        setItensLivro(resposta.data.items)
    }).catch((erro)=>{
        console.log(erro)
    })
}

export default CarregaLivros