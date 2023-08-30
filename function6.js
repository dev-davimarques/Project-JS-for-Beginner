function mediaDosNumeros(arrayNumeros) {
    let mediaTotal = 0; // precisa inicializar as variaveis com o valor zero
    let totalDeNotas = 0;
    
    for (let i = 0; i < arrayNumeros.length; i++) {
      mediaTotal += arrayNumeros[i];
      totalDeNotas += 1;
    }
    
    const media = mediaTotal / totalDeNotas;
    return 'Sua média foi: ' + media;
  }
  
  const notas = [8, 8, 5];
  console.log(mediaDosNumeros(notas));
  