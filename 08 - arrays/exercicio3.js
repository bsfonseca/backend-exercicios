let numerosPerfeitos = [];
let numero = 1;

while (numerosPerfeitos.length < 4) {
  let somaDosDivisores = 0;

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      somaDosDivisores += i;
    }
  }

  if (somaDosDivisores === numero) {
    numerosPerfeitos.push(numero);
  }

  numero++;
}

console.log(numerosPerfeitos);
