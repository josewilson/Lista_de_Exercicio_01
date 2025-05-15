// 5. Calcula o IMC e determina a categoria de peso
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        console.log("Baixo peso");
    } else if (imc < 24.9) {
        console.log("Peso normal");
    } else if (imc < 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}