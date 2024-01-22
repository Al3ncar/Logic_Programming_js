function Desafio() {
  // Desafio

  // Pedir para o usuario digitar um numero
  // Converter em numero interio
  // Pedir para o usuario digitar outro numero
  // Converter em numero interio

  /* 
    Mostrar num alert o seguinte texto
    o resto da divisão de (n1) por (n2) é: (resultado):

    Mostrar num alert o seguinte texto
    o numero (n1) elevado a  (n2) é: (resultado):
  */

  const firstNumber = prompt("Digite um numero");
  const secondNumber = prompt("Digite outro numero");

  let integerFirstNumber = parseInt(firstNumber);
  let integerSecondNumber = parseInt(secondNumber);

  console.log(integerFirstNumber);
  console.log(integerSecondNumber);

  let resultDivision = integerFirstNumber % integerSecondNumber;
  let resultelevation = integerFirstNumber ** integerSecondNumber;

  alert(
    `o resto da divisão de ${integerFirstNumber} por ${integerSecondNumber} é: ${resultDivision}`
  );
  alert(
    `o numero ${integerFirstNumber} elevado a ${integerSecondNumber} é: ${resultelevation}`
  );
}
Desafio();
68.7