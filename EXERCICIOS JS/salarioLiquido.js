const leia = require('readline-sync');
const salarioMinimo = 1518;

let salarioBruto = leia.questionFloat("Digite seu salário bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: ");
let horasExtras = leia.questionFloat("Digite a quantidade de horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
let quantidadeSalariosMinimos = salarioLiquido / salarioMinimo;

console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2));
console.log("Esse valor equivale a " + quantidadeSalariosMinimos.toFixed(2) + " salários mínimos.");