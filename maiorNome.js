// const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
// let maiorNome = '';

// for (let index = 0; index < nomes.length; index = index + 1){
//     if(nomes[index].length > maiorNome.length){
//         maiorNome = nomes[index];
//     }
// }

// 1º opção
// const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
// const maiorNome = '';

// for (let index = 0; index < nomes.length; index = index + 1) {
//   if (nomes[index].length > maiorNome.length) {
//     maiorNome = nomes[index];
//   }
// }


// 2º opção
const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
let maiorNome = '';

for (let index = 0; index < nomes.length; index = index + 1) {
  if (nomes[index].length > maiorNome.length) {
    maiorNome = nomes[index];
  }
}
console.log(maiorNome)