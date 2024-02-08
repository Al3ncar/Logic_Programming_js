function Desafio() {
  // Desafio

  // Pedir para o usuário um número e mostrar a
  // desse numero de 1 a 1000

  const divContainer = document.querySelector(".box");
  let msg = "";

  function NovaTabuada() {
    alert("Nova Tabuada");
  }

  function LimparTabuada() {
    alert("Limpar Tabuada");
  }

  NovaTabuada();
  LimparTabuada();

  for (let i = 0; i <= 1000; i++) {
    msg = `i: ${i}`;
  }

  divContainer.innerHTML += msg;
}
Desafio();
