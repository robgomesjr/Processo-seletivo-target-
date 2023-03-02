let dadosFaturamento = {
  "01": 1500,
  "02": 1800,
  "03": 1200,
  "04": 0,
  "05": 2000,
  "06": 0,
  "07": 1700,
  "08": 2500,
  "09": 1900,
  "10": 2100,
  "11": 1300,
  "12": 2200,
  "13": 2400,
  "14": 1700,
  "15": 0,
  "16": 1800,
  "17": 2000,
  "18": 2300,
  "19": 2100,
  "20": 1900,
  "21": 2200,
  "22": 2500,
  "23": 0,
  "24": 2000,
  "25": 2300,
  "26": 1500,
  "27": 1400,
  "28": 1800,
  "29": 1900,
  "30": 2000,
  "31": 2200
};
let faturamentoDiario = [];
for (let dia in dadosFaturamento) {
  if (dadosFaturamento[dia] > 0) {
    faturamentoDiario.push(dadosFaturamento[dia]);
  }
}
let menorFaturamento = Math.min(...faturamentoDiario);
let maiorFaturamento = Math.max(...faturamentoDiario);
let somaFaturamento = faturamentoDiario.reduce((a, b) => a + b, 0);
let mediaFaturamento = somaFaturamento / faturamentoDiario.length;
let numDiasAcimaMedia = faturamentoDiario.filter(valor => valor > mediaFaturamento).length;
console.log(`Menor faturamento diário: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${numDiasAcimaMedia}`);
