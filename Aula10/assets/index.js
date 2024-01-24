function Desafio() {
  // Desafio

  // Pedir para o usuario digitar um numero
  // Converter em numero interio
  // Pedir para o usuario digitar outro numero
  // Converter em numero interio

  /* 
    Pedir para o usuario digitar dois números e mostrar um mensagem 
    informando se foi aprovado ou não, A nota de corté é 5

    contudo, se qualquer uma das notas for zero
    reprova automaticamente
  */

  let n1 = prompt("digite um numero");
  let n2 = prompt("digite outro numero");

  let numb1 = Number(n1);
  let numb2 = Number(n2);

  let resultMedia = (numb1 + numb2) / 2;

  if (numb1 !== 0 && numb2 !== 0) {
    if (resultMedia <= 5) alert("Você foi reprovado, mas não desista =/");
    if (resultMedia > 5) alert("Você foi APROVADO!!!");
  } else {
    alert("Você foi reprovado, mas não desista");
  }
}
Desafio();
