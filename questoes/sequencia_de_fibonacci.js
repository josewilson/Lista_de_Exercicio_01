let fibonacci = [0, 1]; // primeiros dois números da sequência

for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 10 números da sequência de Fibonacci são:");
console.log(fibonacci.join(", "));
