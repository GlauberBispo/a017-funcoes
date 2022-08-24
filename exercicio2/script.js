//a)
const soma = (a,b) => a+b;
console.log(soma(3,7))
//b)
const maiorQ = (a,b) => a>b;
console.log(maiorQ(5,4))
//c)
const ePar = (num) => {
    if (num % 2 === 0){
        return `O número ${num} é par.`
    }else{
        return `O número ${num} é impar.`
    }
}
console.log(ePar(5));
//d)
const string = (string) => `Essa mensagem tem ${string.length} caracteres e com todas as letras em maiuscúlo fica: ${string.toUpperCase()}.`

console.log(string('Eu amo Nathi!'))
