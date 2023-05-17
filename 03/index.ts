const imprimirTabuada = (lista: number[]) => {

  lista.forEach(num => {
    for (let i = 0; i <= 10; i++) {
      console.log(`${num} x ${i}`);
    }
    console.log('--------------');
  });
}

imprimirTabuada([1, 5, 2]);