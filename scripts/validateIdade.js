import { errorValidation } from "./statesValidation/errorValidation.js";
import { successValidation } from "./statesValidation/successValidation.js";

// Validar idade
export function validateIdade(input, value, yearOld) {
  if (value == "") {
    errorValidation(input, "Preencha esse campo");
    return false;
  }

  if (value < 1) {
    errorValidation(input, "Idade inválida");
    return false;
  }

  if (isIdadeDifferent(input, value, yearOld)) {
    errorValidation(input, "Iasudhasghdfhsefuaf");
    return false;
  }

  successValidation(input);
  return true;
}

export function isIdadeDifferent(input, value, yearOld) {
  const valueIsEqualsYearOld = value == yearOld;
  const valueIsOneYaerMinor = value == yearOld - 1;

  if (valueIsEqualsYearOld || valueIsOneYaerMinor) {
    successValidation(input);
    return false;
  }

  errorValidation(input, "Idade não confere com a data de nascimento");
  return true;
}
