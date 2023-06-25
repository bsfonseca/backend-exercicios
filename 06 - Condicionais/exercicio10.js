function calcularPesoIdeal(altura, sexo) {
  var pesoIdeal;

  if (sexo === 1) {
    pesoIdeal = 62.1 * altura - 44.7;
  } else if (sexo === 2) {
    pesoIdeal = 72.7 * altura - 58;
  }
  return pesoIdeal;
}

var altura = 1.7;
var sexo = 2;

var pesoIdeal = calcularPesoIdeal(altura, sexo);
console.log(`O peso ideal é: ${pesoIdeal} kg`);
