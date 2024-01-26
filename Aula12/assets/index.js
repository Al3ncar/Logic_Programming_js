function Desafio() {
  // Desafio da aula 08

  // Essa é o desafiio da aula 08, com uma mudança de lógica

  // Fazer o jogador 1 digitar um numero
  // Fazer o jogador 2 digitar outro numero

  /* 
    Se forem iguais, mostrar mensagem de 'empate'
    Sortear um numero entre 0 e 1

    se o numero sorteado for 0, ganha quem escolher o numero MENOR
    se o numero sorteado for 1, ganha quem escolher o numero MAIOR 
  */

  let n1 = prompt("Jogador 1, digite um numero");
  let n2 = prompt("Jogador 2, digite outro numero");

  let numb1 = Number(n1);
  let numb2 = Number(n2);

  if (numb1 === numb2) alert("Empate");

  
  // Correção Aula
  
  let nSorteado = parseInt(Math.random() * 2);
  
  alert(nSorteado);

 if ((nSorteado === 0 && numb1 > numb2) || (nSorteado == 1 && numb1 < numb2)) {
    alert("ganha o jogador 1");
  } else alert("ganha o jogador 2");
}
Desafio();
