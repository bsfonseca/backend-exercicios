// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let aluno1 = {
  nome: "Paulo",
  nota1: 10,
  nota2: 9.5,
};

let aluno2 = {
  nome: "Bruna",
  nota1: 9,
  nota2: 8,
};

console.log(aluno1, aluno2);

const media = (aluno1.nota1 + aluno1.nota2) / 2;
console.log(media);

const media2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log(media2);

const mediaTurma = (media + media2) / 2;
console.log(`A média da turma ficou ${mediaTurma.toFixed(2)}`);
