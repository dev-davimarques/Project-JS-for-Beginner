const convidados = ['Sheila', 'Cleyton', 'Leticia', 'Gisele', 'Vinicius', 'Ivan', 'Laura', 'Guilherme', 'Erickson', 'Claudio', 'Adilson', 'Juliana'];
convidados.push('Davi')
const quantidadeConvidados = convidados.length;
// forma de descobrir o último convidado
let ultimoConvidado = convidados[convidados.length - 1];

console.log(convidados);
console.log("Quantidade de convidados: "+quantidadeConvidados);
console.log("Último convidado é: "+ultimoConvidado)