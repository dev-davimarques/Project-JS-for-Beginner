// let nome = 'Davi';
// function imprimeSaudacao() {
//    const saudacao = 'Olá '+nome+'!';
//    return saudacao;
//   }
  
//   console.log(imprimeSaudacao());

// 1º opção
function imprimeSaudacao(parametro){
    return 'Olá '+parametro+'!';
}
console.log(imprimeSaudacao('Davi'))

// 2º opção
function imprimeSaudacao(nome) {
    const saudacao = 'Olá, ' + nome + '!';
    return saudacao;
  }
  
  console.log(imprimeSaudacao('Gisele'));