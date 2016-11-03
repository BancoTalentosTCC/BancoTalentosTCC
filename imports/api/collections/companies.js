import './password.js';
import './email.js';

CompanyProfile = new SimpleSchema({
  nome: {
    type: String,
    label: "Nome para Contato",
    min: 3
  },
  cnpj: {
    type: String,
    label: "CNPJ",
    custom: function() {
      cnpj = this.value;
      var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
      digitos_iguais = 1;
      if (cnpj.length < 14 && cnpj.length < 15) return 'invalid_document';
      for (i = 0; i < cnpj.length - 1; i++) {
        if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
          digitos_iguais = 0;
          break;
        }
      }
      if (!digitos_iguais) {
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2) pos = 9;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) return 'invalid_document';

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2) pos = 9;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) return 'invalid_document';
        return true;
      } else return 'invalid_document';
    }
  },
  razaosoc: {
    type: String,
    label: "Razão Social",
    min: 3
  },
  endereco: {
    type: String,
    label: "Endereço",
    min: 15,
    max: 100
  },
  numero: {
    type: String,
    label: "Número",
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
    label: "Telefone",
    regEx: /^\([1-9]{2}\) [0-9]{8,9}$/
  },
  fax: {
    type: String,
    label: "Fax",
    regEx: /^\([1-9]{2}\) [0-9]{8,9}$/,
    optional: true
  },
  dados: {
    type: String,
    label: "Responsável",
    min: 10
  },
  pers_website: {
    type: String,
    label: "Site Pessoal",
    regEx: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}|[^\s]+\.[^\s]{2,})/,
    optional: true
  },
  facebook: {
    type: String,
    label: "Facebook",
    regEx: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}|[^\s]+\.[^\s]{2,})/,
    optional: true
  },
  twitter: {
    type: String,
    label: "Twitter",
    regEx: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}|[^\s]+\.[^\s]{2,})/,
    optional: true
  },
  github: {
    type: String,
    label: "GitHub",
    regEx: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}|[^\s]+\.[^\s]{2,})/,
    optional: true
  },
  anofundacao: {
    type: String,
    label: "Ano de Fundação",
    regEx: /^((?:19|20)\d\d)$/,
    optional: true
  },
  missao: {
    type: String,
    label: "Missão",
    optional: true
  },
  visao: {
    type: String,
    label: "Visão",
    optional: true
  },
  sobre: {
    type: String,
    label: "Sobre a Organização",
    optional: true
  },
});

export const Company = new SimpleSchema({
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
    regEx: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: CompanyProfile,
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
