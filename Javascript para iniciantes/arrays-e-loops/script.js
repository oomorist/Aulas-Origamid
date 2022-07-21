/** var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

for (var numero = 1; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videogame[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Maça", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
**/

// Crie uma array com os anos que o Brasil ganhou a copa do mundo
// 1959, 1962, 1970, 1994, 2002
var venceuCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem, `o Brasil ganhou a copa de ${ano}`

venceuCopa.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de ${ano}`);
});

// Interaja com um loop nas frutas abaixo e pare quando chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Melancia"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta do array acima em uma variável, sem remover o mesmo da array.

var ultimaFruta = frutas[frutas.length - 1];
