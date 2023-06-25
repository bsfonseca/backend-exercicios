var totalEleitores = 3000;
var votosBrancos = 350;
var votosNulos = 250;
var votosValidos = 2400;

if (votosBrancos + votosNulos + votosValidos > totalEleitores) {
  console.log("Votos brancos, nulos e válidos");
} else {
  var percentualBrancos = (votosBrancos / totalEleitores) * 100;
  var percentualNulos = (votosNulos / totalEleitores) * 100;
  var percentualValidos = (votosValidos / totalEleitores) * 100;

  console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
  console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
  console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}
