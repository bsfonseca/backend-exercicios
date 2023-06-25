/*Desenvolva um algoritmo para percorrer um vetor de 15 elementos
inteiros já preenchido e imprima todos os valores pares.*/

const vetor = [4, 10, 13, 18, 25, 26, 31, 36, 43, 46, 51, 57, 61, 68, 74];

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}
