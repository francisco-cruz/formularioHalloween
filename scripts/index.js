import { validateNome } from "./validateNome.js";
import { validateNascimento } from "./validateNascimento.js";
import { validateIdade } from "./validateIdade.js";
import { validateCEP, seacherCep } from "./validateCEP.js";
import { validateRua } from "./validateRua.js";
import { validateNumero } from "./validateNumero.js";
import { validateBairro } from "./validateBairro.js";
import { validateCidade } from "./validateCidade.js";
import { validateEstado } from "./validateEstado.js";
import {
  validateHobby,
  validateHobbyToArray,
  renderChip,
} from "./validateHobby.js";
import { validateCheckBox } from "./validateCheckbox.js";
import { openModal, removeContent } from "./modal.js";
import { isIdadeDifferent } from "./validateIdade.js";
const form = document.getElementById("form");
const nome = document.getElementById("exampleInputNome");
const nascimento = document.getElementById("exampleInputNascimento");
const idade = document.getElementById("exampleInputIdade");
const cep = document.getElementById("exampleInputCEP");
const rua = document.getElementById("exampleInputRua");
const numero = document.getElementById("exampleInputNumero");
const bairro = document.getElementById("exampleInputBairro");
const cidade = document.getElementById("exampleInputCidade");
const estado = document.getElementById("exampleInputEstado");
const hobby = document.getElementById("exampleInputHobby");
export const hobbies = [];
const buttonAddHobby = document.getElementById("add-hobby");
const checkBox = document.getElementById("Check1");
const content = document.getElementById("content");
const audioSusto = document.getElementById("susto");
let yearsOld = 0;

// "Enviar" formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  isIdadeDifferent(idade, idade.value, yearsOld);
  checkInputs();
});

nascimento.addEventListener("focusout", () => {
  completeIdade(idade, nascimento.value);
});

function completeIdade(idade, nascimentoValue) {
  const nascimentoRegex = nascimentoValue.replace(/\//g, "-");
  const dateArray = nascimentoRegex.split("-");

  const currentYear = dateArray[0];
  yearsOld = new Date().getFullYear() - currentYear;
  idade.value = yearsOld;
}

idade.addEventListener("focusout", () => {
  return isIdadeDifferent(idade, idade.value, yearsOld);
});

// Botão adicionar Hobby
buttonAddHobby.addEventListener("click", () => {
  const hobbyRegex = hobby.value.replace(/[0-9]/g, "").trim();
  const isValideHobbyOnArray = validateHobbyToArray(hobby, hobbyRegex); // Validando o valor antes de mandar para o array

  if (isValideHobbyOnArray) {
    hobbies.push(hobbyRegex);
    hobby.value = "";

    renderChip(hobbyRegex);
  }
});

// Consumir api Viacep
cep.addEventListener("focusout", () => {
  seacherCep(cep, cep.value);
});

// Checar campos
function checkInputs() {
  const nomeValue = nome.value.trim();
  const nascimentoValue = nascimento.value.trim();
  const idadeValue = idade.value.trim();
  const cepValue = cep.value.trim();
  const ruaValue = rua.value.trim();
  const numeroValue = numero.value.trim();
  const bairroValue = bairro.value.trim();
  const cidadeValue = cidade.value.trim();
  const estadoValue = estado.value.trim();
  const valideNome = validateNome(nome, nomeValue);
  const valideNascimento = validateNascimento(nascimento, nascimentoValue);
  const valideIdade = validateIdade(idade, idadeValue, yearsOld);
  const valideCEP = validateCEP(cep, cepValue);
  const valideRua = validateRua(rua, ruaValue);
  const valideNumero = validateNumero(numero, numeroValue);
  const valideBairro = validateBairro(bairro, bairroValue);
  const valideCidade = validateCidade(cidade, cidadeValue);
  const valideEstado = validateEstado(estado, estadoValue);
  const valideHobby = validateHobby(hobby);
  const valideCheckBox = validateCheckBox(checkBox);

  // Se todas as variáveis forem verdadeiras irá montar o objeto usuário
  if (
    valideNome &&
    valideNascimento &&
    valideIdade &&
    valideCEP &&
    valideRua &&
    valideNumero &&
    valideBairro &&
    valideCidade &&
    valideEstado &&
    valideHobby &&
    valideCheckBox
  ) {
    const usuario = {
      nome: nomeValue,
      nascimento: nascimentoValue,
      idade: idadeValue,
      cep: cepValue,
      rua: ruaValue,
      numero: numeroValue,
      cidade: cidadeValue,
      bairro: bairroValue,
      estado: estadoValue,
      hobbies: hobbies,
    };

    removeContent(content);
    openModal(usuario);
    audioSusto.play();
  }
}
