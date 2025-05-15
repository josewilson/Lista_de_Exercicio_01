// 7. Calcula o valor total da compra de maçãs
function calcularPrecoMacas(quantidade) {
    const precoPorMaca = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * precoPorMaca;
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
}
