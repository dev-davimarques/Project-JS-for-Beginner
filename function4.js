function calculaDespesa(luz, internet){
    const total = luz+internet;
    return 'Valor total: R$ '+total;
}
const contaLuz = 250;
const contaInternet = 100;

console.log(calculaDespesa(contaLuz,contaInternet));