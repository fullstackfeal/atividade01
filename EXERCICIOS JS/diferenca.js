const leia = require('readline-sync');

let numero1 = leia.questionFloat("Digite o número 1: ");
let numero2 = leia.questionFloat("Digite o número 2: ");
let numero3 = leia.questionFloat("Digite o número 3: ");
let numero4 = leia.questionFloat("Digite o número 4: ");

let produto1 = numero1 * numero2;
let produto2 = numero3 * numero4;

let diferenca = produto1 - produto2;

console.log("\nResultado:");
console.log("Produto 1 (número 1 * número 2): " + produto1.toFixed(2));
console.log("Produto 2 (número 3 * número 4): " + produto2.toFixed(2));
console.log("Diferença entre os produtos: " + diferenca.toFixed(2));
