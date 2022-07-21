// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

// Atribua true para a variavel darCrédito, caso o cliente possua carro e casa. E False caso o contrário

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
/* darCredito =
  possuiCarro && possuiCasa ? "Liberar Crédito" : "Crédito não liberado"; */
console.log(darCredito);
