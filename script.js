// Exemplo de código JavaScript para uma calculadora simples
// Este código captura os valores de dois campos de entrada e uma operação selecionada, e calcula o resultado com base na operação escolhida.

// Captura os elementos HTML necessários
const resultadoContainer = document.querySelector(".resultado-container");
const resultado = document.querySelector(".resultado-valor");
const numero1 = document.querySelector(".input1");
const numero2 = document.querySelector(".input2");
const operacao = document.querySelector(".operacao");

// Captura os botões de operação e o botão de calcular
const calcular = document.querySelector(".botao-resultado");

// Captura os botões de operação
const soma = document.querySelector(".somar");
const subtrair = document.querySelector(".subtrair");
const multiplicar = document.querySelector(".multiplicar");
const dividr = document.querySelector(".dividir");
const limparCampos1 = document.querySelector(".botao-limpar-campos");
const limparResultado1 = document.querySelector(".botao-limpar-resultado");

// Adicionando evento de mudança para atualizar o resultado ao alterar os inputs
let valor1 = 0;
let valor2 = 0;
let operacaoSelecionada = 0;

// Adicionando evento de mudança para atualizar o resultado ao alterar os inputs
function pegarValores() {
  valor1 = numero1.value;
  valor2 = numero2.value;
  operacaoSelecionada = operacao.value;
}


// Adicionando evento de mudança para atualizar o resultado ao alterar os inputs
calcular.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Atualiza os valores ao clicar no botão
  pegarValores();
  console.log("Valores capturados:", valor1);
  console.log("Valores capturados:", valor2);
  console.log("Operação capturada:", operacaoSelecionada.valueOf());

//// Verifica qual operação foi selecionada e chama a função correspondente
  if (operacaoSelecionada == "somar") {
    somar();
  } else if (operacaoSelecionada == "subtrair") {
    subtrairValor();
  } else if (operacaoSelecionada == "Multiplicar") {
    multiplicarValor();
  } else if (operacaoSelecionada == "dividir") {
    dividirValor();
  } else {
    console.log("Operação inválida");
  }
});

// Adicionando funções para cada operação
function somar() {
  pegarValores();
  const resultadoSoma = parseFloat(valor1) + parseFloat(valor2);
  resultado.innerHTML += `<div>Resultado (${operacaoSelecionada}): ${resultadoSoma}</div>`; // Adiciona o valor em uma nova linha
  console.log("Resultado da soma: ", resultadoSoma);

  return resultadoSoma;
}

function subtrairValor() {
  pegarValores();
  const resultadoSubtrair = parseFloat(valor1) - parseFloat(valor2);
  resultado.innerHTML += `<div>Resultado (${operacaoSelecionada}): ${resultadoSubtrair}</div>`; // Adiciona o valor em uma nova linha
  console.log("Resultado da Subtração: ", resultadoSubtrair);

  return resultadoSubtrair;
}

function multiplicarValor() {
  pegarValores();
  const resultadoMultiplicacao = parseFloat(valor1) * parseFloat(valor2);
  resultado.innerHTML += `<div>Resultado (${operacaoSelecionada}): ${resultadoMultiplicacao}</div>`; // Adiciona o valor em uma nova linha
  console.log("Resultado da Multiplicação: ", resultadoMultiplicacao);

  return resultadoMultiplicacao;
}

function dividirValor() {
  pegarValores();
  const resultadoDivisao = parseFloat(valor1) / parseFloat(valor2);
  resultado.innerHTML += `<div>Resultado (${operacaoSelecionada}): ${resultadoDivisao}</div>`; // Adiciona o valor em uma nova linha
  console.log("Resultado da Divisão: ", resultadoDivisao);

  if (valor2 == 0) {
    resultado.innerHTML += `<div>Erro: Divisão por zero não é permitida.</div>`; // Adiciona o valor em uma nova linha
    console.log("Erro: Divisão por zero não é permitida.");
    return;
  }

  return resultadoDivisao;
}

// função para limpar o resultado
function limparCampos() {
//   resultado.innerHTML = ""; // Limpa o conteúdo do resultado
  numero1.value = ""; // Limpa o campo de entrada 1
  numero2.value = ""; // Limpa o campo de entrada 2
  operacao.value = ""; // Limpa a operação selecionada
  console.log("Campos limpos");
}

function limparResultado() {
    resultado.innerHTML = ""; // Limpa o conteúdo do resultado// Chama a função para limpar o resultado
    console.log("Campos limpos");
};

// Adicionando eventos de clique para os botões de limpar
limparCampos1.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o recarregamento da página
  limparCampos(); // Chama a função para limpar os campos
});

limparResultado1.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o recarregamento da página
  limparResultado(); // Chama a função para limpar o resultado
}

);
