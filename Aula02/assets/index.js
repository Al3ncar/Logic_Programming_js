// Variaveis

const nameUser = prompt('qual é seu nome??')
console.log(nameUser)

if (nameUser === true) {
    alert(`Bemm Vindoo ${nameUser}, a nossa 2 Aula`)
} else {
    prompt(`Qual é seu nome mesmo?`)
}

// variaveis

// Espaço reservado na memoria da maquina capaz de armazenar um valor
// deste modo tenho acesso ao valor atravez da variavel
// o que foi digitado dentro da Prompt será armazenado

// Podemos concatenar valores dessa maneira

let nome = 'Igor'
let sobrenome = 'Bastos'

console.log('olá, eu sou' + nome + sobrenome)

// pode ser representado por um sinal de "+"

// dentro das variaveis podemos guardar alguns tipos de dados

// - string
// - numero inteiro
// - numero real

// - boleano
// - array
// - objeto

// nomenclatura da let não podemos ter caracteres especiais
// algus tipos de dados que uma variavel pode conter

// - null
// - undefined
// - NaN

// outra forma

const initialDiv = document.querySelector('div');
const inputEl = document.createElement('input')
initialDiv.appendChild(inputEl)

inputEl.setAttribute('placeholder', 'Digite seu nome aqui...')
inputEl.setAttribute('type', 'text')

const buttonEl = document.createElement('button')
buttonEl.textContent = 'Enviar'
initialDiv.appendChild(buttonEl)

function getInputValue() {
    const valueInput = inputEl.value
    console.log(valueInput)
}

buttonEl.addEventListener('click', getInputValue)

console.log()
