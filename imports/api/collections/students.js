import './password.js';
import './email.js';

StudentsSchema1 = new SimpleSchema({
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
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
            '00000000000'
        ];
        for(i=0;i<invalidos.length;i++) {
            if( invalidos[i] == this.value) {
                $return = 'invalid_document';
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
            $return = 'invalid_document';
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
            $return = 'invalid_document';
        }
        return $return;
    }
  },
  nascimento: {
    type: String,
    label: "Nascimento",
    regEx: /^((?:19|20)\d\d)[- -.](0[1-9]|1[012])[- -.](0[1-9]|[12][0-9]|3[01])$/
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
  complemento: {
    type: String,
    label: "Complemento",
    min: 15,
    max: 100,
    optional: true
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
  especial: {
    type: Boolean,
    label: "Especial"
  }
});

StudentsSchema2 = new SimpleSchema({
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

StudentsSchema3 = new SimpleSchema({
  idioma: {
    type: String,
    label: "Idioma",
    optional: true
  },
  nivel_do_idioma: {
    type: String,
    label: "Nível do Idioma",
    optional: true
  }
});

StudentsSchema4 = new SimpleSchema({
  lattes: {
    type: String,
    label: "Lattes",
    regEx: SimpleSchema.RegEx.Url,
    optional: false
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

StudentsSchema5 = new SimpleSchema({
  nome_emp: {
    type: String,
    label: "Nome da Empresa",
    optional: true
  },
  cargo_emp: {
    type: String,
    label: "Cargo",
    optional: true
  },
  atribuicoes: {
    type: String,
    label: "Atribuições",
    min: 30,
    optional: true
  },
  duracao_emp: {
    type: String,
    label: "Tempo de Trabalho",
    regEx: /^[0-9]+$/,
    optional: true
  },
  cidade_emp: {
    type: String,
    label: "Cidade",
    optional: true
  },
  uf_emp: {
    type: String,
    label: "UF",
    max: 2,
    optional: true
  }
});

Schemas = {};

Schemas.UserProfile = new SimpleSchema({
  formacao: {
    type: StudentsSchema2,
    label: "Formação",
    optional: true
  },
  idiomas: {
    type: [ StudentsSchema3 ],
    label: "Idioma",
    optional: true
  },
  qualificacoes: {
    type: StudentsSchema4,
    label: "Qualificações",
    optional: true
  },
  experiencia: {
    type: [ StudentsSchema5 ],
    label: "Experiência Profissional",
    optional: true
  }
}
);

Schemas.UserProfile._schema = _.extend(Schemas.UserProfile._schema, StudentsSchema1._schema);

Schemas.User = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        label: "Perfil",
        optional: false
    },
    services: {
        type: Object,
        blackbox: true
    },
    roles: {
        type: String,
        optional: true,
        blackbox: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);


