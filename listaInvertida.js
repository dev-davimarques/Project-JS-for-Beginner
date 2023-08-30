let lista = ['Quebra-Cabeça', 'Tetris', 'Sudoku', 'Xadrez', 'Batalha Naval'];
let inverter = true;
let listaInvertida = [];
console.log(lista);
// console.log(lista.indexOf[1])
if (inverter === true) {
    listaInvertida[0] = lista[4];
    listaInvertida[1] = lista[3];
    listaInvertida[2] = lista[2];
    listaInvertida[3] = lista[1];
    listaInvertida[4] = lista[0];
  
    console.log(listaInvertida); // [5, 4, 3, 2, 1]
  } else {
    console.log(lista); // [1, 2, 3, 4, 5]
  }