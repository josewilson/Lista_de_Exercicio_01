// 6. Verifica se os lados formam um triângulo e determina o tipo
function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo equilátero");
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo isósceles");
        } else {
            console.log("Triângulo escaleno");
        }
    } else {
        console.log("Os lados não formam um triângulo.");
    }
}