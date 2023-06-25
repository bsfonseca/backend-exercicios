let A = parseInt(prompt("Digite o tamanho do primeiro lado"));
let B = parseInt(prompt("Digite o tamanho do segundo lado"));
let C = parseInt(prompt("Digite o tamanho do terceiro lado"));

if (C > A + B || A > B + C || B > A + C) {
  document.write("NAO FORMAM UM TRIANGULO</br>");
} else if (A != B && A != C && B != C) {
  document.write("TRIANGULO ESCALENO</br>");
} else if (A == B && A == C);
document.write("TRIANGULO EQUILATERO</br>");
