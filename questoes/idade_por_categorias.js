// 2. Classifica a idade em categorias
function classificarIdade(idade) {
    if (idade < 12) {
        console.log("Criança");
    } else if (idade < 18) {
        console.log("Adolescente");
    } else if (idade < 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}