import cardapio from "../dados/cardapio";

function filtroSugestao(){
    cardapio.filter((sugest) => sugest.pratoSugerido === true)
}