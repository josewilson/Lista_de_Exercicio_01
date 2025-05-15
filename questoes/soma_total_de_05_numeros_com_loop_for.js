let soma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));
  
  // Verifica se o valor digitado é um número válido
  while (isNaN(numero)) {
    numero = parseFloat(prompt(`Entrada inválida. Digite um número válido para o ${i}º valor:`));
  }

  soma += numero;
}

alert(`A soma total dos 5 números é: ${soma}`);
