/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

let palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão","farofa"];

for (let palavra of palavras) {
    if (palavra.length > 5) {
        console.log(palavra);
    }
 }