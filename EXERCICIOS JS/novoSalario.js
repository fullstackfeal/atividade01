const leia = require('readline-sync');
const salarioMinimo = 1518;

let salario = leia.questionFloat("\nDigite seu salário: ");
console.log("Seu salário é: R$ " + salario.toFixed(2));

let abono = leia.questionFloat("\nDigite o valor do abono: ");
console.log("O valor do abono é: R$ " + abono.toFixed(2));

let novosalario = salario + abono;
let quantidadeSalariosMinimos = novosalario / salarioMinimo;

console.log("Seu novo salário é: R$ " + novosalario.toFixed(2));
console.log("Esse valor equivale a " + quantidadeSalariosMinimos.toFixed(2) + " salários mínimos.");