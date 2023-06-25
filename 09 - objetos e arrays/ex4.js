// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não.

// No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const pessoas = [];

pessoas.push({
  nome: "Daphne",
  idade: 3,
  trabalhando: true,
  salario: 5000,
});

pessoas.push({
  nome: "Rapunzel",
  idade: 20,
  trabalhando: false,
});

pessoas.push({
  nome: "Maria",
  idade: 30,
  trabalhando: true,
  salario: 2400,
});

// Mostre as pessoas que estão desempregadas

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

const desempregadas = pessoas.filter((pessoa) => pessoa.trabalhando == false);

console.log("Pessoas desempregadas:");
for (let pessoa of desempregadas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

// No final, mostre as pessoas que ganham menos que 2500
// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

const empregadasMenos2500 = pessoas.filter((pessoa) => pessoa.trabalhando == true && pessoa.salario < 2500);

console.log("\nPessoas empregadas que ganham menos que 2500:");
for (let pessoa of empregadasMenos2500) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const empregadasMais2500 = pessoas.filter((pessoa) => pessoa.trabalhando == true && pessoa.salario > 2500);

console.log("\nPessoas empregadas que ganham mais que 2500:");
for (let pessoa of empregadasMais2500) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}
