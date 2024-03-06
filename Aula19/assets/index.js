const divContainer = document.querySelector(".result");
const promptValue = prompt("Digite um numero!!");
const pronptConvert = Number(promptValue);
let mgs = "";

function initialMsg() {
  mgs = pronptConvert;
  divContainer.innerHTML = mgs;
  return mgs;
}
initialMsg();

function add() {
  const promptValue = prompt("Digite um numero!!");
  const pronptConvert = Number(promptValue);

  mgs += pronptConvert;
  divContainer.innerHTML = mgs;
}

function sub() {
  const promptValue = prompt("Digite um numero!!");
  const pronptConvert = Number(promptValue);

  mgs -= pronptConvert;
  divContainer.innerHTML = mgs;
}

function mult() {
  const promptValue = prompt("Digite um numero!!");
  const pronptConvert = Number(promptValue);

  mgs *= pronptConvert;
  divContainer.innerHTML = mgs;
}

function div() {
  const promptValue = prompt("Digite um numero!!");
  const pronptConvert = Number(promptValue);

  mgs /= pronptConvert;
  divContainer.innerHTML = mgs;
}

function clear() {
  mgs = 0;
  divContainer.innerHTML = mgs;
}
