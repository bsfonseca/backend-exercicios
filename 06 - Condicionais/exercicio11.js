var turno = prompt("Em qual turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno:");

turno = turno.toUpperCase();

switch (turno) {
  case "M":
    alert("Bom dia!");
    break;
  case "V":
    alert("Boa tarde!");
    break;
  case "N":
    alert("Boa noite!");
    break;
  default:
    alert("Valor inválido!");
    break;
}
