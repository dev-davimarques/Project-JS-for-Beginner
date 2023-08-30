function imprimeSaudacao(nome,sobrenome,idade){
    const saudacao = 'Olá '+ nome + ' '+ sobrenome +'!';
    const exibeIdade = 'Você tem '+ idade +' anos.';
    return saudacao+' '+exibeIdade;
}

const nomeDaPessoa = 'Davi';
const sobrenomeDaPessoa = 'Marques';

console.log(imprimeSaudacao(nomeDaPessoa,sobrenomeDaPessoa,23));
