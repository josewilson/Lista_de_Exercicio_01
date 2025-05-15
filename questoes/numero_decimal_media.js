let soma = 0;
let quantidade = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));

  if (!isNaN(numero) && numero !== 0) {
    soma += numero;
    quantidade++;
  } else if (isNaN(numero)) {
    alert("Valor inválido. Digite um número válido.");
  }
} while (numero !== 0);

if (quantidade === 0) {
  alert("Nenhum número válido foi digitado.");
} else {
  let media = soma / quantidade;
  alert(`A média aritmética dos ${quantidade} números é: ${media.toFixed(2)}`);
}
