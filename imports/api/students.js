import { Mongo } from 'meteor/mongo';

studentsSchema1 = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome",
		min: 3
	},
	cpf: {
		type: String,
		label: "CPF",
		custom: function() {
	     	$return = true;
	     	// this is mostly not needed
	     	var invalidos = [
	        '111.111.111-11',
	        '222.222.222-22',
	        '333.333.333-33',
	        '444.444.444-44',
	        '555.555.555-55',
	        '666.666.666-66',
	        '777.777.777-77',
	        '888.888.888-88',
	        '999.999.999-99',
	        '000.000.000-00'
	      ];
	      for(i=0;i<invalidos.length;i++) {
	          if( invalidos[i] == this.value) {
	              $return = 'cpf_invalido';
	          }
	      }
	      var value = this.value;
	      //validando primeiro digito
	      add = 0;
	      for ( i=0; i < 9; i++ ) {
	          add += parseInt(value.charAt(i), 10) * (10-i);
	      }
	      rev = 11 - ( add % 11 );
	      if( rev == 10 || rev == 11) {
	          rev = 0;
	      }
	      if( rev != parseInt(value.charAt(9), 10) ) {
	          $return = 'cpf_invalido';
	      }
	      //validando segundo digito
	      add = 0;
	      for ( i=0; i < 10; i++ ) {
	          add += parseInt(value.charAt(i), 10) * (11-i);
	      }
	      rev = 11 - ( add % 11 );
	      if( rev == 10 || rev == 11) {
	          rev = 0;
	      }
	      if( rev != parseInt(value.charAt(10), 10) ) {
	          $return = 'cpf_invalido';
	      }
	      return $return;
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
		regEx: /^\([1-9]{2}\) [0-9]{8,9}$/,
		optional: true
	},
	celular: {
		type: String,
		label: "Celular",
		regEx: /^\([1-9]{2}\) [0-9]{8,9}$/
	},
	password: {
		type: String,
		label: "Password",
    min: 8
	},
  password_confirmation: {
    type: String,
    label: "Password Confirmation",
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "nao_pode_ser_diferente";
      }
    }
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
    autoValue: function () {
      if (this.field('idioma').value == undefined) {
        this.unset();
        return undefined; 
      }
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
  atribuicoes: {
    type: "String",
    label: "Atribuições",
    min: 30
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

//studentSchema = new SimpleSchema([studentsSchema1, studentsSchema2, studentsSchema3, studentsSchema4, studentsSchema5]);
//Meteor.users.attachSchema(studentSchema);

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
    {exp: /^[0-9]+$/, msg: "[label] deve conter apenas números"},
    {exp: /^\([1-9]{2}\) [0-9]{8,9}$/, msg: "[label] deve ser no formato (99) 99999999 (8 ou 9 números)"}
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
  cpf_invalido: "Precisa ser um [key] válido",
  nao_pode_ser_diferente: "Confirmação de senha é diferente da senha!"
});

studentsSchema2.messages({
  "regEx conclusao": [
    {exp: /^((?:19|20)\d\d)$/, msg: "O ano em que você se formou ou que deve se formar"}
  ]
});
