function Desafio() {
  // Desafio

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

  let lockNumber = Math.random() * 2;
  let lockNumberParse = parseInt(lockNumber);

  alert(lockNumberParse);

  if (lockNumberParse === 0) {
    if (numb1 < numb2) alert(`Parabens! o Jogador 2 Ganhou`);
    if (numb1 > numb2) alert(`Parabens! o Jogador 1 Ganhou`);
  } else {
    if (numb1 > numb2) alert(`Parabens! o Jogador 1 Ganhou`);
    if (numb1 < numb2) alert(`Parabens! o Jogador 2 Ganhou`);
  }

  // Correção Aula

  if (numb1 === numb2) {
    alert("empate");
  } else {
    var nSorteado = parseInt(Math.random() * 2);
    if (nSorteado === 0) {
      if (numb1 < numb2) {
        alert("ganhou jogador 1");
      } else {
        alert("ganhador jogador 2");
      }
    } else {
      if (numb2 < numb1) {
        alert("ganhou jogador 1");
      } else {
        alert("ganhador jogador 2");
      }
    }
  }
}
Desafio();
