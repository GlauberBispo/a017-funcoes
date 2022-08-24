//a)
// function olaBino (nome) {
//     return `Olá ${nome}`
// };

// console.log(olaBino('Glauber'));

//b)
// function tabu6(numero) {
//     let array = [1,2,3,4,5,6,7,8,9,10]
//     for (let i of array) {
//         console.log(`${numero} * ${i} = ${numero*i} `)
//     }   
// }
// console.log(tabu6(6));

//c)

const olaBino = (nome) => `Olá ${nome}`

console.log(olaBino('Glauber'));

const tabu6 = (numero) => {
    let array = [1,2,3,4,5,6,7,8,9,10]
    for (let i of array) {
        console.log(`${numero} * ${i} = ${numero*i} `)
    }   
}
console.log(tabu6(6));