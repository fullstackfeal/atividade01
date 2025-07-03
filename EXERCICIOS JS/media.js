const readline = require('readline-sync');

let nota1 = readline.questionFloat("Nota 1: ");
let nota2 = readline.questionFloat("Nota 2: ");
let nota3 = readline.questionFloat("Nota 3: ");
let nota4 = readline.questionFloat("Nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média final: " + media.toFixed(1));

if (media >= 5) {
  console.log("Parabéns! Você foi APROVADO!");
} else {
  console.log("Infelizmente, você foi REPROVADO.");
}