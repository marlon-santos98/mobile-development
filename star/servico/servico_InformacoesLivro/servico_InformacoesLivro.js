import axios from "axios"

export function servico_carregaDetalhesLivro(idLivro, setDetalhesLivro){
    axios.get("https://www.googleapis.com/books/v1/volumes/"+idLivro,{
        timeout: 30000,
        params:{
            fields: "id,volumeInfo(title,description,imageLinks(thumbnail, large))"
        }
    }).then((resposta) => {
        const detalhes = resposta.data
        setDetalhesLivro(detalhes)
    }).catch((erro)=>{
        console.log(erro)
    })
}