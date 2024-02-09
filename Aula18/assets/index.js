// Desafio

// Pedir para o usuário um número e mostrar a
// desse numero de 1 a 1000

const divContaainer = document.querySelector(".box");
let msg = "";

const getResult = () => {
  const textPrompt = prompt("Digite um numero de 0 a 100");
  const numberResult = Number(textPrompt);
  return numberResult;
};

const novaTabuada = () => {
  const promptResult = getResult();
  limparTabuada()

  for (let i = 0; i <= 1000; i++) {
    msg += `<li>${promptResult} x ${i} = ${promptResult * i}</li>`;
  }

  divContaainer.innerHTML = msg;
};

const limparTabuada = () => {
  msg = '';
  divContaainer.innerHTML = msg;
};
