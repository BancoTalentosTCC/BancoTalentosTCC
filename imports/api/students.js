import { Mongo } from 'meteor/mongo';

export var Students = new Meteor.Collection('students');

studentsSchema1 = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome",
		min: 3
	},
	cpf: {
		type: String,
		label: "CPF",
		custom: function() { var Soma; var Resto; Soma = 0; 
			if (this.value == "00000000000") return 'cpf_invalido'
			for (i=1; i<=9; i++) Soma = Soma + parseInt(this.value.substring(i-1, i)) * (11 - i); 
			Resto = (Soma * 10) % 11; 
			if ((Resto == 10) || (Resto == 11))  Resto = 0;
			if (Resto != parseInt(this.value.substring(9, 10)) ) return 'cpf_invalido'
			Soma = 0; 
			for (i = 1; i <= 10; i++) Soma = Soma + parseInt(this.value.substring(i-1, i)) * (12 - i); 
			Resto = (Soma * 10) % 11; if ((Resto == 10) || (Resto == 11)) Resto = 0; 
			if (Resto != parseInt(this.value.substring(10, 11) ) ) return 'cpf_invalido'
			return true; 
		}
	},
	nascimento: {
		type: String,
		label: "Nascimento",
		regEx: /^((?:19|20)\d\d)[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])$/
	},
	email: {
		type: String,
		label: "Email",
		regEx: SimpleSchema.RegEx.Email
	},
	perfil: {
		type: String,
		label: "perfil",
    allowedValues: ['Aluno', 'Ex-aluno']
	},
	sexo: {
		type: String,
		label: "Sexo",
    allowedValues: ['Masculino', 'Feminino']
	},
	endereco: {
		type: String,
		label: "Endereço",
		min: 15,
		max: 100
	},
	numero: {
		type: String,
		label: "Numero",
		regEx: /^[0-9]+$/
	},
	bairro: {
		type: String,
		label: "Bairro",
		min: 2,
		max: 40
	},
	cidade: {
		type: String,
		label: "cidade"
	},
	uf: {
		type: String,
		label: "UF",
		max: 2
	},
	cep: {
		type: String,
		label: "CEP",
		regEx: /(^\d{5}-\d{3}$)/
	},
	phone: {
		type: String,
		label: "Telefone Residencial",
		regEx: /^[0-9]+$/,
		optional: true
	},
	celular: {
		type: String,
		label: "Celular",
		regEx: /^[0-9]+$/
	},
	senha: {
		type: String,
		label: "Senha",
    min: 8
	},
	especial: {
		type: Boolean,
		label: "Especial"
	}
});

studentsSchema2 = new SimpleSchema({
	formacao: {
		type: String,
		label: "Formação"
	},
	curso: {
		type: String,
		label: "Curso"
	},
	conclusao: {
		type: String,
		label: "Ano de Formação",
		regEx: /^((?:19|20)\d\d)$/
	},
});

studentsSchema3 = new SimpleSchema({
	idioma: {
		type: String,
		label: "Idioma",
		optional: true
	},
	nivel_do_idioma: {
		type: String,
		label: "Nível do Idioma",
		optional: true,
		custom: function() {
			console.log(this.field('idioma').value, "value");
			if (this.field('idioma').value != undefined) {return 'required'; }
			else {this.value = undefined;}
		}
	}
});

studentsSchema4 = new SimpleSchema({
	lattes: {
		type: String,
		label: "Lattes",
		regEx: SimpleSchema.RegEx.Url,
		optional: true
	},
	area_de_formacao: {
		type: String,
		label: "Área de Formação"
	},
	experiencia: {
		type: String,
		label: "Experiência",
		optional: true
	},
	qualificacao: {
		type: String,
		label: "Qualificação",
		optional: true
	},
	cursos_extras: {
		type: String,
		label: "Cursos Extras",
		optional: true
	}
});

studentsSchema5 = new SimpleSchema({
	nome_emp: {
		type: String,
		label: "Nome da Empresa"
	},
	cargo_emp: {
		type: String,
		label: "Cargo"
	},
	duracao_emp: {
		type: String,
		label: "Duração",
		regEx: /^[0-9]+$/
	},
	cidade_emp: {
		type: String,
		label: "Cidade"
	},
	uf_emp: {
		type: String,
		label: "UF",
		max: 2
	}
});

studentSchema = new SimpleSchema([studentsSchema1, studentsSchema2, studentsSchema3, studentsSchema4, studentsSchema5]);

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
  regEx: [
    {msg: "[label] sofreu um erro de validação"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] precisa ser um e-mail válido"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] precisa ser um e-mail v-alido"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] precisa ser um domínio válido"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] precisa ser um domínio válido"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] precisa ser uma url válida"},
    {exp: /^[0-9]+$/, msg: "[label] deve conter apenas números"}
  ],
  keyNotInSchema: "[key] is not allowed by the schema"
});

studentsSchema1.messages({
	"regEx nascimento": [
    {exp: /^((?:19|20)\d\d)[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])$/, msg: "Não é uma data válida para [label]"}
  ],
 	"regEx phone": [
    {exp: /^[0-9]+$/, msg: "[label] Precisa estar no formato (xx) xxxx-xxxx ou (xx) xxxxx-xxxx"}
  ],
  "regEx conclusao": [
    {exp: /^((?:19|20)\d\d)$/, msg: "O ano em que você se formou ou que deve se formar"}
  ],
  "regEx cep": [
  	{exp: /(^\d{5}-\d{3}$)/, msg: "[value] não é um cep válido"}
  ],
  cpf_invalido: "Precisa ser um [key] válido"
});

studentsSchema2.messages({
  "regEx conclusao": [
    {exp: /^((?:19|20)\d\d)$/, msg: "O ano em que você se formou ou que deve se formar"}
  ]
});
