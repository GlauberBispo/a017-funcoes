const soma = (a,b) => a+b;
const subtracao = (a,b) => a-b;
const multiplicacao = (a,b) => a*b;
const divisao = (a,b) => a/b;

const num = +prompt('Informe um número para realizar operações matemáticas.');
const num2 = +prompt('Informe outro número para realizar operações matemáticas.');

console.log(`A soma entre os dois números é: ${soma(num,num2)};
A Subtração entre os dois números é: ${subtracao(num,num2)};
A multiplicação entre os dois números é: ${multiplicacao(num,num2)};
A divisão entre os dois números é: ${divisao(num,num2)}.`)