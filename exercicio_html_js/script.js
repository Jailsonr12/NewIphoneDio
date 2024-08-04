const form = document.getElementById("form-numero");
const mensagens = document.getElementById("mensagens");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");

let condicional = false;
const mesagemError = `O valor A: ${numeroA.value} é maior que valor B: ${numeroB.value}`;
const mensagensSucesso = `O valor B: ${numeroA.value} é maior que valor A: ${numeroB.value}`;

function validarBMaiorA(valorA, valorB) {
  console.log(valorA, valorB);
  return valorB > valorA;
}

numeroA.addEventListener("keyup", exibirResultado);
numeroB.addEventListener("keyup", exibirResultado);

function exibirResultado() {
  let valorA = parseInt(numeroA.value);
  let valorB = parseInt(numeroB.value);
  condicional = validarBMaiorA(valorA, valorB);
  if (!isNaN(valorA) && !isNaN(valorB)) {
    if (condicional) {
      sucesso();
    } else if (valorA == valorB) {
      igualdade();
    } else {
      error();
    }
  } else {
    limpar();
  }
}
function sucesso() {
  mensagens.innerHTML = mensagensSucesso;
  numeroA.classList.remove("error");
  numeroB.classList.remove("error");
  mensagens.classList.remove("error-message");
  mensagens.classList.add("success-message");
}
function igualdade() {
  mensagens.innerHTML = "A é B são iguais";
  mensagens.classList.remove("success-message");
  mensagens.classList.add("error-message");
  numeroA.classList.add("error");
  numeroB.classList.add("error");
}
function error() {
  mensagens.innerHTML = mesagemError;
  numeroB.classList.remove("error");
  mensagens.classList.remove("success-message");
  numeroA.classList.add("error");
  mensagens.classList.add("error-message");
}
function limpar() {
  mensagens.innerHTML = "";
  mensagens.classList.remove("success-message");
  mensagens.classList.remove("error-message");
  numeroA.classList.remove("error");
  numeroB.classList.remove("error");
}
