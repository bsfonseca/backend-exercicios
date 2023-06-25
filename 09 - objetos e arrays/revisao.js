// let nome = "Daphne";
// let idade = 3;
// let raca = "Vira lata";

// let nome2 = "Toby";
// let idade2 = 5;
// let raca2 = "Ovelheiro";

let daphne = {
  nome: "Daphne",
  idade: 3,
  raca: "Vira lata",
  foiCastrada: true,
  //   brinquedinhos: ["Porquinho", "Ossinho", "vaquinha"],
};

let toby = {
  nome: "Toby",
  idade: 5,
  raca: "Ovelheiro",
  foiCastrada: false,
};

let kiko = {
  nome: "Kiko",
  idade: 10,
  raca: "Poodle",
  foiCastrada: false,
};

let monobola = {
  nome: "Gato monobola",
  idade: 2,
  raca: "Gato",
  foiCastrada: true,
};

const cachorros = [daphne, toby, kiko];

cachorros.push(monobola);

// console.log(cachorros);
// function dizerOla() {
//   console.log("Olá!");
// }

// Funções:

// Function normal
function somar(x, y) {
  return x + y;
}

// Arrow function
// const realizarSoma = (x, y) => {
//   return x + y;
// };

// Arrow function
const realizarSoma = (x, y) => x + y;

const resultado = somar(10, 50);
const resultado2 = realizarSoma(10, 50);

// console.log(resultado, resultado2);

// Operações de manipulaçao de array
// push
// pop
// shift
// unshift

// Operações de leitura de array
console.log(cachorros);

// FILTER - retorna uma lista filtrada
let cachorrosCastrados = cachorros.filter((cachorro) => cachorro.foiCastrada === false);
let filhotes = cachorros.filter((cachorro) => cachorro.idade < 6);

console.log(cachorrosCastrados);
console.log(filhotes);

// FIND - retorna sempre 1 item
let filhote = cachorros.find((cachorro) => cachorro.idade < 6);
console.log(filhote);
