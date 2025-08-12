//Função de serviço que monta a pergunta, garantindo que o maior número sempre apareça primeiro
function servico_montaPergunta(x, y, operador) { 
   if(x > y)
   {
      return x + operador + y;
   }
   else
   {
      return y + operador + x;
   }
}

//Função de serviço que calcula e retorna o resultado da pergunta gerada
function servico_calculaResultado(x, y, operador) {
  let resultado;
  
  let valorA;
  let valorB;

  if(x > y)
  {
    valorA = x;
    valorB = y;
  }
  else
  {
    valorA = y;
    valorB = x;
  }

  if(operador == "+"){
    resultado = valorA + valorB;
  }
  else if(operador == "-"){
    resultado = valorA - valorB;
  }
  else if(operador == "x"){
    resultado = valorA * valorB;
  }
  else if(operador == "/") {
    const resto = valorA % valorB;
    resultado = (valorA - resto) / valorB;
  }

  return resultado;
}

//Função usada pra gerar o primeiro número do cálculo da pergunta
function geraX(){
  return Math.floor(Math.random() * 99 + 1);
}

//Função usada pra gerar o segundo número do cálculo da pergunta
function geraY(){
  return Math.floor(Math.random() * 9 + 1);
}

//Função que formata o resultado com 1 casa decimal
function formataResultadoDecimal(resultado) {
    return parseFloat(resultado.toFixed(1));
}

//Função que compara a resposta digitada pelo usuário com o resultado da questão
export function VerificaRespostaCerta(respostaUsuario, resultadoQuestao) {
  if(respostaUsuario == resultadoQuestao){
      return true;
  }
  else {
      return false;
  }
}

//Função que retorna um objeto contendo a pergunta que será exibida e seu resultado
export function RetornaQuestao() {
  const operadores = ["+", "-", "x", "/"];
  const operadorSelecionado = operadores[Math.floor(Math.random() * operadores.length)];

  const x = geraX();
  const y = geraY();

  const pergunta = servico_montaPergunta(x,y,operadorSelecionado);
  const resultado = servico_calculaResultado(x, y, operadorSelecionado);

  const questao = {Pergunta: pergunta, Resultado: resultado};

  return questao;
}