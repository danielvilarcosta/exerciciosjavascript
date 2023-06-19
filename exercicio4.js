/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let numero = 100 

let sequencia = [];
let a = 0;
let b = 1;

while (a <= numero) {
  sequencia.push(a);

  let temp = a;
  a = b;
  b = temp + b;
}

console.log("Sequência de Fibonacci até o número " + numero + ":");
console.log(sequencia.join(", "));