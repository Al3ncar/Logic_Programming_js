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

// Codigo da aula

var n1 = prompt("digite outro numero??");
n1 = parseFloat(n1);

escrever();

function escrever() {
  var output = document.querySelector(".result");
  output.innerHTML = n1;
}

function add() {
  var n = prompt("digite outro numero!!");
  n = parseFloat(n);
  n1 = n1 + n;
  escrever();
}
function sub() {
  var n = prompt("digite outro numero!!");
  n = parseFloat(n);
  n1 = n1 - n;
  escrever();
}
function mult() {
  var n = prompt("digite outro numero!!");
  n = parseFloat(n);
  n1 = n1 * n;
  escrever();
}
function div() {
  var n = prompt("digite outro numero!!");
  n = parseFloat(n);
  n1 = n1 / n;
  escrever();
}
