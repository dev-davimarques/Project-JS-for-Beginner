let valores = [8,1,7,4,2,9];
// for (let i = 0; i<valores.length; i++){
//     console.log(valores[i]);
// }

// nova forma de fazer isso
for (let pos in valores){
    console.log(valores[pos])
}

// indexOf pesquisa o indice do valor digitado
console.log('--------------')
console.log(valores.indexOf(7)) // 7 é o valor que existe dentro do array