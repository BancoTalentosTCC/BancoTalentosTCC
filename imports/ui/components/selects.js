Template.registerHelper('options_perfil', [
  {value: 'aluno', text: 'Aluno'},
  {value: 'ex-aluno', text: 'Ex-aluno'}
]);

Template.registerHelper('options_sexo', [
  {value: 'm', text: 'Masculino'},
  {value: 'f', text: 'Feminino'}
]);

Template.registerHelper('options_estado', [
  {value: 'ac', text: 'Acre'},
  {value: 'al', text: 'Alagoas'},
  {value: 'am', text: 'Amazonas'},
  {value: 'ap', text: 'Amapá'},
  {value: 'ba', text: 'Bahia'},
  {value: 'ce', text: 'Ceará'},
  {value: 'df', text: 'Distrito Federal'},
  {value: 'es', text: 'Espírito Santo'},
  {value: 'go', text: 'Goiás'},
  {value: 'ma', text: 'Maranhão'},
  {value: 'mt', text: 'Mato Grosso'},
  {value: 'ms', text: 'Mato Grosso'},
  {value: 'mg', text: 'Minas Gerais'},
  {value: 'pa', text: 'Pará'},
  {value: 'pb', text: 'Paraíba'},
  {value: 'pr', text: 'Paraná'},
  {value: 'pe', text: 'Pernambuco'},
  {value: 'pi', text: 'Piauí'},
  {value: 'rj', text: 'Rio de Janeiro'},
  {value: 'rn', text: 'Rio Grande do Norte'},
  {value: 'ro', text: 'Rondônia'},
  {value: 'rs', text: 'Rio Grande de Sul'},
  {value: 'rr', text: 'Roraima'},
  {value: 'sc', text: 'Santa Catarina'},
  {value: 'se', text: 'Sergipe'},
  {value: 'sp', text: 'São Paulo'},
  {value: 'to', text: 'Tocantins'}
]);

Template.registerHelper('options_formacao', [
  {value: 'grad', text: 'Graduação'},
  {value: 'pos', text: 'Pós-Graduação'},
  {value: 'mest', text: 'Mestrado'},
  {value: 'dout', text: 'Doutorado'}
]);

Template.registerHelper('options_curso', [
  {value: 'adm', text: 'Administração'},
  {value: 'ciencbio', text: 'Ciências Biológicas'},
  {value: 'cienccont', text: 'Ciências Contábeis'},
  {value: 'edfisic', text: 'Educação Física'},
  {value: 'enferm', text: 'Enfermagem'},
  {value: 'engprod', text: 'Engenharia de Produção'},
  {value: 'farmac', text: 'Farmácia'},
  {value: 'fisiot', text: 'Fisioterapia'},
  {value: 'gastro', text: 'Gastronomia'},
  {value: 'gpi', text: 'Gestão da Produção Industrial'},
  {value: 'grh', text: 'Gestão de Recursos Humanos'},
  {value: 'hist', text: 'História'},
  {value: 'letr', text: 'Letras'},
  {value: 'sist', text: 'Sistemas de Informação'},
  {value: 'mat', text: 'Matemática'},
  {value: 'med', text: 'Medicina'},
  {value: 'pedag', text: 'Pedagogia'},
  {value: 'psicol', text: 'Psicologia'},
  {value: 'pubpr', text: 'Publicidade e Propaganda'}
]);

Template.registerHelper('options_idioma', [
  {value: 'esp', text: 'Espanhol'},
  {value: 'ing', text: 'Inglês'},
  {value: 'fra', text: 'Frances'},
  {value: 'ale', text: 'Alemão'},
  {value: 'ita', text: 'Italiano'},
  {value: 'mand', text: 'Mandarim'},
  {value: 'jap', text: 'Japonês'},
]);

Template.registerHelper('options_nivel_idioma', [
  {value: 'basico', text: 'Básico'},
  {value: 'intermed', text: 'Intermediário'},
  {value: 'avanc', text: 'Avançado'},
  {value: 'flue', text: 'Fluente'}
]);
