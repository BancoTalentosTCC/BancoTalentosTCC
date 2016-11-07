import faker from 'faker';

export const job = {
  "categoria": "admin",
  "tipo_vaga": "estagio",
  "nome": faker.name.jobTitle(),
  "expiration": 1479866399000,
  "descricao": faker.lorem.paragraphs(),
  "especial": faker.random.boolean(),
  "companyName": faker.company.companyName(),
  "createdAt": 1478381974834,
  "status": "active"
}
