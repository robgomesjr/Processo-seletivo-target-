let faturamentoMensal = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};
let valorTotal = Object.values(faturamentoMensal).reduce((a, b) => a + b, 0);
for (let estado in faturamentoMensal) {
  let percentual = (faturamentoMensal[estado] / valorTotal) * 100;
  console.log(`${estado} - ${percentual.toFixed(2)}%`);
}
