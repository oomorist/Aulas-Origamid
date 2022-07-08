//Crie uma função pra verificar se um valor é Truthy
function verificarTruthy(valor) {
  return !!valor;
}

// Crie uma função matemática que retorne o perímetro de um quadrado.
// Lembrando: perímetro é a soma dos quatro lados

function perimetro(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo.
// Ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par

function verificaPar(number) {
  var par = number % 2;
  if (par === 0) {
    return "É par";
  } else {
    return "Não é par";
  }
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function verificaTipo(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do Javascript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer

addEventListener("click", function () {
  console.log("André Rafael");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
