/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
let produtos = [
    new Produto("Arroz", 10.0),
    new Produto("Feijão", 14.0),
    new Produto("Carne", 30.0),
    new Produto("Cerveja", 4.5),
    new Produto("Macarrão", 6.0),
    new Produto("Farofa", 3.5)
];
let totalProdutos = 0;
let totalValor = 0;
for (let produto of produtos) {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
    totalProdutos++;
    totalValor += produto.preco;
}
console.log(`Total de produtos: ${totalProdutos}`);
console.log(`Valor total: R$ ${totalValor}`);
