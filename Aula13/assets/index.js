function Desafio() {
  // Desafio

  // Pedir para o usuario digitar um numero de 1 a 7
  //Mostrar na tela uma mensagem diferente para cada número

  let n1 = prompt("Digite um numero de 1 a 7");
  let numb1 = Number(n1);

  if (numb1 > 8 || numb1 < 0) alert("Numero não segue os requesitos!!!");

  switch (numb1) {
    case 1:
      alert("Domingo");
      break;
    case 2:
      alert("Segunda-feira");
      break;
    case 3:
      alert("Terça-feira");
      break;
    case 4:
      alert("Quarta-feira");
      break;
    case 5:
      alert("Quinta-feira");
      break;
    case 6:
      alert("Sexta-feira");
      break;
    case 7:
      alert("Sabado");
      break;

    default:
      alert("dia da semana não encontrado");
      break;
  }

  // Correção Aula

  switch (numb1) {
    case 1:
      alert("Boa escolha!");
      break;
    case 2:
      alert("Que legal!");
      break;
    case 3:
      alert("Caramba!");
      break;
    default:
      alert("escolha de 1 a 3");
      break;
  }
}
Desafio();
