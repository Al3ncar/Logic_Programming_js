function Desafio() {
  // Desafio

  // Pedir para o usuário um número e mostrar a
  // desse numero de 1 a 1000

  const divContainer = document.querySelector(".box");
  const h2Container = document.querySelector(".data");

  let anoInicial = prompt("Digite um numero??");
  let anoNumb = Number(anoInicial);

  let anoAtual = 2024;

  h2Container.textContent = "Esses são todos os anos Bissextos:";

  while (anoNumb <= anoAtual) {
    if (!(anoNumb % 100 === 0) || anoNumb % 400 === 0) {
      divContainer.innerHTML += `<li>${anoNumb}</li>`;
    } else divContainer.innerHTML += `<li>${anoNumb}: não é bissexto</li>`;

    anoNumb += 4;
  }
}
Desafio();
