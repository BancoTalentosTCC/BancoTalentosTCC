import faker from 'faker';

export const company = {
  "email": faker.internet.email(),
  "password": "pass1234",
  "profile": {
    "nome": faker.company.companyName(),
    "cnpj": "62082813000125",
    "razaosoc": faker.company.companyName(),
    "endereco": faker.address.streetAddress(),
    "numero": faker.random.number(),
    "bairro": faker.address.county(),
    "cidade": faker.address.city(),
    "uf": "mg",
    "cep": "37542-000",
    "phone": "(33) 333333333",
    "dados": faker.name.firstName() + " " + faker.name.lastName(),
    "pers_website": faker.internet.url()
  }
}

export const student = {
  "email": faker.internet.email(),
  "password": "pass1234",
  "profile": {
    "nome": faker.name.firstName() + " " + faker.name.lastName(),
    "cpf": "11548969605",
    "nascimento": "24-03-1999",
    "perfil": "ex-aluno",
    "sexo": "f",
    "endereco": faker.address.streetAddress(),
    "numero": faker.random.number(),
    "bairro": faker.address.county(),
    "cidade": faker.address.city(),
    "uf": "mg",
    "cep": "37542-000",
    "phone": "(35) 99410788",
    "celular": "(35) 99410788",
    "facebook": faker.internet.url(),
    "pers_website": faker.internet.url(),
    "linkedin": faker.internet.url(),
    "twitter": faker.internet.url(),
    "especial": faker.random.boolean(),
    "formacao": {
      "formacao": "grad",
      "curso": "sist",
      "conclusao": "2016"
    },
    "idiomas": [
      {
        "idioma": "ing",
        "nivel_do_idioma": "avanc"
      },
      {
        "idioma": "fra",
        "nivel_do_idioma": "basico"
      },
      {
        "idioma": "esp",
        "nivel_do_idioma": "intermed"
      }
    ],
    "qualificacoes": {},
    "experiencia": [
      {
        "nome_emp": faker.company.companyName(),
        "cargo_emp": faker.name.jobTitle(),
        "atribuicoes": faker.lorem.paragraphs(),
        "mes_inicial": "jun",
        "ano_inicial": "2015",
        "mes_final": "set",
        "ano_final": "2016",
        "current_job": false,
        "cidade_emp": faker.address.city(),
        "uf_emp": "mg"
      }
    ]
  }
}
