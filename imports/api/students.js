import  './messages.js';

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
    label: "Senha",
      min: 8
  },
  password_confirmation: {
    type: String,
    label: "Confirmação de Senha",
    min: 8,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "cant_be_different";
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


