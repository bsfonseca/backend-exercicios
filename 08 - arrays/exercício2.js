const vetor = [1, 5, 8, 12, 15, 23, 26, 32, 38, 50, 55, 62, 68, 70, 72, 80, 88, 90, 95, 98];

let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

console.log("A soma dos elementos é:", soma);
