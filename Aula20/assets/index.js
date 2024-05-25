// const divContainer = document.querySelector(".result");
// const promptValue = prompt("Digite um numero!!");

// function promptConvert (convertValue) {
//   return Number()
// }

// const pronptConvert = Number(promptValue);
// let mgs = "";

// function initialMsg() {
//   mgs = pronptConvert;
//   divContainer.innerHTML = mgs;
//   return mgs;
// }
// initialMsg();

// function calc(operation) {
//   let newValue = prompt("Digite um segundo valor numerico!!!")
//   let
// }

const divResult = document.querySelector(".result");
const resultPromptValue = prompt("Digite um numero!!");

let valueConvert;
let resultValue;

resultValue = Number(resultPromptValue);
divResult.textContent = resultValue;

const newValueRender = () => {
  const promptNewValue = prompt("Digite um numero!!");
  valueConvert = Number(promptNewValue);

  return valueConvert;
};

function clear() {
  divResult.textContent = 0;
}

function calc(operation) {
  newValueRender();
  result(operation);

  divResult.textContent = resultValue;
}

function result(operation) {
  operation === "+" && (resultValue += valueConvert);
  operation === "-" && (resultValue -= valueConvert);
  operation === "/" && (resultValue /= valueConvert);
  operation === "*" && (resultValue *= valueConvert);
}
