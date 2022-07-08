// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades: nome e sobrenome

var eu = {
  nome: "Vitor",
  sobrenme: "Santos",
  idade: 27,
  cidade: "Mossoró",
};

// Crie um metodo no objeto anterior, que mostre seu nome completo

eu.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenme}`;
};

//Modifique o valor da propriedade preço para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador preto com 10 anos, que late ao ver um homem

var doggo = {
  nome: "Rocambole",
  raca: "Labrador",
  sexo: "Macho",
  rabo: true,
  idade: 4,
  cor: "Preto",
  latir(pessoa) {
    if (pessoa === "homem") {
      return true;
    } else {
      return false;
    }
  },
};
