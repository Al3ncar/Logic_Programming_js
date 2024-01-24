function Desafio() {
  // Desafio

  // Pedir para o usuario digitar um numero
  // Converter em numero interio
  // Pedir para o usuario digitar outro numero
  // Converter em numero interio

  /* 
    Pedir para o usuario digitar dois números e mostrar um mensagem informando se foi aprovado ou não A nota de corté é 5
  */

  let n1 = prompt("digite um numero");
  let n2 = prompt("digite outro numero");

  let numb1 = Number(n1);
  let numb2 = Number(n2);

  let resultMedia = (numb1 + numb2) / 2;

  if (resultMedia > 5) alert("Você foi APROVADO!!!");
  if (resultMedia <= 5) alert("Você foi reprovado, mas não desista =/");

  // Codigo Aula

  if (resultMedia > 5) {
    alert("Parabéns! Você foi aprovado");
  } else {
    alert("Desculpe, mas não foi dessa vez");
  }
}
Desafio();
