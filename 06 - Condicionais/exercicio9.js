let numero = 7;
let numeroPrimo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    numeroPrimo = false;
  }
}
