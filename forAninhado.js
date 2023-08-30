// comparando os números da mega sena
const numMegaSena = [10,23,34,53,55,57];
const meusNumerosSorteados = [10,13,17,55,78,90];
const numIguais = [];

for(let i = 0; i < numMegaSena.length; i++){
    for(let c = 0; c < meusNumerosSorteados.length; c++){
        if (numMegaSena[i] === meusNumerosSorteados[c]){
            numIguais.push(meusNumerosSorteados[c]);
        }
    }
}
console.log(numIguais)