import { Mongo } from 'meteor/mongo';

export var Students = new Meteor.Collection('students');

studentsSchema1 = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome"
	},
	cpf: {
		type: String,
		label: "CPF",
		custom: function() { var Soma; var Resto; Soma = 0; 
			if (this.value == "00000000000") return 'inválido'
			for (i=1; i<=9; i++) Soma = Soma + parseInt(this.value.substring(i-1, i)) * (11 - i); 
			Resto = (Soma * 10) % 11; 
			if ((Resto == 10) || (Resto == 11))  Resto = 0;
			if (Resto != parseInt(this.value.substring(9, 10)) ) return 'inválido'
			Soma = 0; 
			for (i = 1; i <= 10; i++) Soma = Soma + parseInt(this.value.substring(i-1, i)) * (12 - i); 
			Resto = (Soma * 10) % 11; if ((Resto == 10) || (Resto == 11)) Resto = 0; 
			if (Resto != parseInt(this.value.substring(10, 11) ) ) return 'inválido'
			return true; 
		}
	},
	nascimento: {
		type: Date,
		label: "Nascimento"
	},
	email: {
		type: String,
		label: "Email",
		regEx: SimpleSchema.RegEx.Email
	},
	perfil: {
		type: String,
		label: "perfil"
	},
	sexo: {
		type: String,
		label: "Sexo",
    allowedValues: ['Masculino', 'Feminino']
	},
	endereco: {
		type: String,
		label: "Endereco"
	},
	numero: {
		type: Number,
		label: "Numero"
	},
	bairro: {
		type: String,
		label: "Bairro"
	},
	cidade: {
		type: String,
		label: "cidade"
	},
	uf: {
		type: String,
		label: "UF"
	},
	cep: {
		type: Number,
		label: "CEP"
	},
	phone: {
		type: Number,
		label: "Telefone Residencial",
		optional: true
	},
	celular: {
		type: Number,
		label: "Celular"
	},
	senha: {
		type: String,
		label: "Senha"
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
		type: Number,
		label: "Conclusão"
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
			if (this.field('idioma').value != '') return 'required'; 
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
		label: "Duração"
	},
	cidade_emp: {
		type: String,
		label: "Cidade"
	},
	uf_emp: {
		type: String,
		label: "UF"
	}
});

Students.attachSchema(studentsSchema1, { selector: { type: '1' } });
Students.attachSchema(studentsSchema2, { selector: { type: '2' } });
Students.attachSchema(studentsSchema3, { selector: { type: '3' } });
Students.attachSchema(studentsSchema4, { selector: { type: '4' } });
Students.attachSchema(studentsSchema5, { selector: { type: '5' } });
