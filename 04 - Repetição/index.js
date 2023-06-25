let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;
let growCoins = 127;

while (growCoins > 0) {
  if (growCoins >= 50) {
    growCoins -= 50;
    ++notas50;
  } else if (growCoins >= 10) {
    growCoins -= 10;
    ++notas10;
  } else if (growCoins >= 5) {
    growCoins -= 5;
    ++notas5;
  } else if (growCoins >= 1) {
    growCoins -= 1;
    ++notas1;
  }
}
document.write(`GC$ 50,00 -> ${notas50}<br>`);
document.write(`GC$ 10,00 -> ${notas10}<br>`);
document.write(`GC$ 5,00 -> ${notas5}<br>`);
document.write(`GC$ 1,00 -> ${notas1}<br>`);
