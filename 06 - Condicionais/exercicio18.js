var precoTabela = 5000;
var numeroParcelas = 12;

var valorParcela;
var precoTotal;

if (numeroParcelas === 1) {
  valorParcela = precoTabela - precoTabela * 0.025;
  precoTotal = valorParcela;
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
  valorParcela = precoTabela;
  precoTotal = valorParcela * numeroParcelas;
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
  valorParcela = precoTabela + precoTabela * 0.06;
  precoTotal = valorParcela * numeroParcelas;
} else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
  valorParcela = precoTabela + precoTabela * 0.13;
  precoTotal = valorParcela * numeroParcelas;
}

console.log("Valor da parcela: R$" + valorParcela.toFixed(2));
console.log("Preço total da compra: R$" + precoTotal.toFixed(2));
