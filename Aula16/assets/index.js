function Desafio() {
  // Desafio

  // Pedir para o usuário um número e mostrar a
  // desse numero de 1 a 1000

  const divContainer = document.querySelector(".box");
  const h2Container = document.querySelector(".data");

  let anoInicial = prompt("Digite um numero??");
  let anoNumb = Number(anoInicial);
  
  let anoAtual = 2024;

  h2Container.textContent = 'Esses são todos os anos Bisextos:'

  while (anoNumb <= anoAtual) {
    divContainer.innerHTML += `<li>${anoNumb}</li>`;
    anoNumb += 4;
  }
}
Desafio();
