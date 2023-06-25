var numero = parseInt(prompt("Digite um número: "));
var soma = 0;

while (soma < 500) {
  console.log("passou por aqui");
  numero *= 3;
  soma += numero;
}

console.log("O último valor é:", numero);
