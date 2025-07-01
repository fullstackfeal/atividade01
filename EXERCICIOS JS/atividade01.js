const leia = require('readline-sync');

let salario = leia.questionFloat("\nDigite seu salário: ");
console.log("Seu salário é: R$ " + salario.toFixed(2));

let abono = leia.questionFloat("\nDigite o valor do abono: ");
console.log("O valor do abono é: R$ " + abono.toFixed(2));

let novosalario = salario + abono;
console.log("Seu novo salário é: R$ " + novosalario.toFixed(2));
