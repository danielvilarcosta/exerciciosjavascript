/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */
let numero = 11;

let primo = true;
let i = 2;

if (numero < 2) {
  primo = false; // Números menores que 2 não são primos
} else {
  do {
    if (numero % i === 0) {
      primo = false; // O número é divisível por outro valor além de 1 e ele mesmo
      break;
    }
    i++;
  } while (i * i <= numero);
}

// Verifica se o número é primo e imprime o resultado
if (primo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}
