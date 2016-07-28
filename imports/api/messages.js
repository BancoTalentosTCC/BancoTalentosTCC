//ERROR MESSAGES LIST
SimpleSchema.messages({
  required: "[label] não pode ficar em branco",
  minString: "[label] precisa ter no minimo [min] caracteres",
  maxString: "[label] não deve exceder [max] caracteres",
  minNumber: "[label] precisa ser no mínimo [min]",
  maxNumber: "[label] não deve exceder [max]",
  minDate: "[label] precisa ser no mínimo [min]",
  maxDate: "[label] não pode ser depois de [max]",
  badDate: "[label] não é um formato válido",
  minCount: "Você precisa expecificar no mínimo [minCount] valores",
  maxCount: "Você não deve especificar mais que [maxCount] valores",
  noDecimal: "[label] precisa ser um valor inteiro",
  notAllowed: "[value] não é um valor permitido",
  expectedNumber: "[label] precisa ser um número",
  invalid_document: "Precisa ser um [key] válido",
  cant_be_different: "Confirmação de senha é diferente da senha!",
  regEx: [{
    msg: "[label] sofreu um erro de validação"
  }, {
    exp: SimpleSchema.RegEx.Email,
    msg: "[label] precisa ser um e-mail válido"
  }, {
    exp: SimpleSchema.RegEx.WeakEmail,
    msg: "[label] precisa ser um e-mail v-alido"
  }, {
    exp: SimpleSchema.RegEx.Domain,
    msg: "[label] precisa ser um domínio válido"
  }, {
    exp: SimpleSchema.RegEx.WeakDomain,
    msg: "[label] precisa ser um domínio válido"
  }, {
    exp: SimpleSchema.RegEx.Url,
    msg: "[label] precisa ser uma url válida"
  }, {
    exp: /^[0-9]+$/,
    msg: "[label] deve conter apenas números"
  }, {
    exp: /^\([1-9]{2}\) [0-9]{8,9}$/,
    msg: "[label] deve ser no formato (99) 99999999 (8 ou 9 números)"
  }, {
    exp: /^[0-9]+$/,
    msg: "[label] Precisa estar no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx"
  }, {
    exp: /^((?:19|20)\d\d)[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])$/,
    msg: "Não é uma data válida para [label]"
  }, {
    exp: /^((?:19|20)\d\d)$/,
    msg: "O ano em que você se formou ou que deve se formar"
  }, {
    exp: /(^\d{5}-\d{3}$)/,
    msg: "[value] não é um cep válido"
  }]
});
