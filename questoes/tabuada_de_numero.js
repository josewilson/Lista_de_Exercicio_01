let numero = parseFloat(prompt("Digite um número para ver a tabuada:"));

if (isNaN(numero)) {
  alert("Por favor, digite um número válido.");
} else {
  let resultado = `Tabuada do ${numero}:\n\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  alert(resultado);
}
