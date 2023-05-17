const gerarEtiquetas = (
  objeto: { produto: string, lote: number, ano: number, qtd: number }
): string[] => {

  let etiquetas = [];

  for (let i = 0; i < objeto.qtd; i++) {
    const eitqueta = `${objeto.lote}-${objeto.ano}-00${i}`
    etiquetas.push(eitqueta)
  }

  return etiquetas
}

console.log(
  gerarEtiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
  })
);
