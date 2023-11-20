function TwoNumbers() {
  const firNumber = prompt("digite um numero: ");
  const secNumber = prompt("digite um segundo numero: ");

  const firNNumber = Number(firNumber);
  const secNNumber = Number(secNumber);

  const soma = (x, y) => {
    if (typeof x === "number" && typeof y === "number") return x + y;
  };
  const sub = (x, y) => {
    if (typeof x === "number" && typeof y === "number") return (x - y);
  };
  const mult = (x, y) => {
    if (typeof x === "number" && typeof y === "number") return x * y;
  };
  const div = (x, y) => {
    if (typeof x === "number" && typeof y === "number") return x / y;
  };

  const resultS = soma(firNNumber, secNNumber);
  const resultSub = sub(firNNumber, secNNumber);
  const resultDiv = div(firNNumber, secNNumber);
  const resultMult = mult(firNNumber, secNNumber);

  const divInHtml = document.querySelector("div");

  const pargResultSoma = document.createElement("p");
  const pargResultSub = document.createElement("p");
  const pargResultMult = document.createElement("p");
  const pargResultDiv = document.createElement("p");

  const spanResultS = document.createElement("span");
  const spanResultSub = document.createElement("span");
  const spanResultMult = document.createElement("span");
  const spanResultDiv = document.createElement("span");

  divInHtml.appendChild(pargResultSoma);
  pargResultSoma.innerHTML += `A soma é: `;
  pargResultSoma.appendChild(spanResultS);
  spanResultS.innerHTML = `${resultS}`;

  divInHtml.appendChild(pargResultSub);
  pargResultSub.innerHTML += `A subtração é: `;
  pargResultSub.appendChild(spanResultSub);
  spanResultSub.innerHTML = `${resultSub}`;

  divInHtml.appendChild(pargResultMult);
  pargResultMult.innerHTML += `A multiplicação é: `;
  pargResultMult.appendChild(spanResultMult);
  spanResultMult.innerHTML = `${resultMult}`;

  divInHtml.appendChild(pargResultDiv);
  pargResultDiv.innerHTML += `A divisão é: `;
  pargResultDiv.appendChild(spanResultDiv);
  spanResultDiv.innerHTML = `${resultDiv}`;

  if (resultS >= 1) {
    spanResultS.classList.add("positivos");
  } else if (resultS <= -1) {
    spanResultS.classList.add("negativos");
  } else {
    spanResultS.classList.remove("negativos");
    spanResultS.classList.remove("positivos");
  }

  if (resultSub >= 1) {
    spanResultSub.classList.add("positivos");
  } else if (resultSub <= -1) {
    spanResultSub.classList.add("negativos");
  } else {
    spanResultSub.classList.remove("negativos");
    spanResultSub.classList.remove("positivos");
  }

  if (resultMult >= 1) {
    spanResultMult.classList.add("positivos");
  } else if (resultMult <= -1) {
    spanResultMult.classList.add("negativos");
  } else {
    spanResultMult.classList.remove("negativos");
    spanResultMult.classList.remove("positivos");
  }

  if (resultDiv >= 1) {
    spanResultDiv.classList.add("positivos");
  } else if (resultDiv <= -1) {
    spanResultDiv.classList.add("negativos");
  } else {
    spanResultDiv.classList.remove("negativos");
    spanResultDiv.classList.remove("positivos");
  }

}
TwoNumbers();
