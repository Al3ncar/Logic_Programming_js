function Desafio() {
  // Desafio

  // Pedir para o usuário um número e mostrar a
  // desse numero de 1 a 1000

  let n1 = prompt("Digite um numero??");
  let numb1 = Number(n1);

  const containerDiv = document.querySelector(".box");
  for (let i = 1; i <= 1000; i++) {
    containerDiv.innerHTML += `<li>${numb1} x ${i} = <span> ${
      numb1 * i
    }<span> </li>`;
  }

  // codigo da aula

  let i = 1;

  while (i <= 1000) {
    document.white(numb1 + " x " + i + " = " + numb1 * i + "<br>");
    if (i % 10 === 0) {
      containerDiv.innerHTML += "<hr>";
    }
    i = i + 1;
  }
  document.white("Saiu do loop");
}
Desafio();
