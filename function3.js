function imprimeSaudacao(nome, sobrenome, idade) {
    const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
    const exibeIdade = 'Você tem ' + idade + ' anos.';
  
    return saudacao + ' ' + exibeIdade;
  }
  
  console.log(imprimeSaudacao('Alberto', 'Cavalcanti', 85));
  console.log(imprimeSaudacao('Cleyton', 'Oliveira', 32));
  console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));