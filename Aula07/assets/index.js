function Desafio() {
  // Desafio

  // Pedir para o usuario digitar um numero
  // Converter em numero interio
  // Pedir para o usuario digitar outro numero
  // Converter em numero interio

  /* 
    Pedir para o usuario digitar dois números e mostrar um boolean
    indicando se a média for maior que 5
  */

  let n1 = prompt("digite um numero");
  let n2 = prompt("digite outro numero");

  let numb1 = Number(n1);
  let numb2 = Number(n2);

  let resultMedia = (numb1 + numb2) / 2;

  if(resultMedia > 5) alert('Seu numero é MAIOR do que zero')
  if(resultMedia < 5) alert('Seu numero é MENOR do que zero')


  // retorno em aula

  alert(resultMedia > 5)
}
Desafio();
