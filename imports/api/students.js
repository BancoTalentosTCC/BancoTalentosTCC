import { Mongo } from 'meteor/mongo';

export var Students = new Meteor.Collection('students');

studentsSchema1 = new SimpleSchema({
	nome: {
		type: String,
		label: "Nome"
	},
	cpf: {
		type: Number,
		label: "CPF"
	},
	nascimento: {
		type: Date,
		label: "Nascimento"
	},
	email: {
		type: String,
		label: "Email"
	},
	perfil: {
		type: String,
		label: "perfil"
	},
	sexo: {
		type: String,
		label: "Sexo"
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
		label: "Telefone Residencial"
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
		label: "Idioma"
	},
	nivel_do_idioma: {
		type: String,
		label: "Nível do Idioma"
	}
});

studentsSchema4 = new SimpleSchema({
	lattes: {
		type: String,
		label: "Lattes"
	},
	area_de_formacao: {
		type: String,
		label: "Área de Formação"
	},
	experiencia: {
		type: String,
		label: "Experiência"
	},
	qualificacao: {
		type: String,
		label: "Qualificação"
	},
	cursos_extras: {
		type: String,
		label: "Cursos Extras"
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