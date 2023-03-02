function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}
let numero = prompt("Digite um número inteiro para verificar se ele pertence à sequência de Fibonacci: ");
numero = parseInt(numero);
let pertence = false;
let i = 0;
while (fibonacci(i) <= numero) {
  if (fibonacci(i) === numero) {
    pertence = true;
    break;
  }
  i++;
}
if (pertence) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
