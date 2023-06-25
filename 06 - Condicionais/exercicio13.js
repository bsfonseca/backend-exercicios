var numero = 8;

console.log("Números ímpares entre 1 e " + numero + ":");

for (var i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
