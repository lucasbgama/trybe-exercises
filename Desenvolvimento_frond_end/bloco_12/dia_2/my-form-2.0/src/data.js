const fields = [
  {
    label: 'Nome',
    maxLength: 40,
    required: true,
  },
  {
    label: 'Email',
    maxLength: 50,
    required: true,
  },
  {
    label: 'CPF',
    maxLength: 11,
    required: true,
  },
  {
    label: 'Endereço',
    maxLength: 200,
    required: true,
    name: 'endereco',
  },
  {
    label: 'Cidade',
    maxLength: 28,
    required: true,
  },
  {
    label: 'Estado',
    required: true,
    input: 'Select',
    options: [
      'AC - Acre',
      'AL - Alagoas',
      'AP - Amapá',
      'AM - Amazonas',
      'BA - Bahia',
      'CE - Ceará',
      'DF - Distrito Federal',
      'ES - Espírito Santo',
      'GO - Goías',
      'MA - Maranhão',
      'MT - Mato Grosso',
      'MS - Mato Grosso do Sul',
      'MG - Minas Gerais',
      'PA - Pará',
      'PB - Paraíba',
      'PR - Paraná',
      'PE - Pernambuco',
      'PI - Piauí',
      'RJ - Rio de Janeiro',
      'RN - Rio Grande do Norte',
      'RS - Rio Grande do Sul',
      'RO - Rondônia',
      'RR - Roraíma',
      'SC - Santa Catarina',
      'SP - São Paulo',
      'SE - Sergipe',
      'TO - Tocantins',
    ],
  },
  {
    label: 'Tipo',
    input: 'Radio',
    options: ['Casa', 'Apartamento'],
    required: true,
  },
];

const fields2 = [
  {
    label: 'Resumo do currículo',
    input: 'TextArea',
    required: true,
    name: 'resumo',
    maxLength: 1000,
  },
  { label: 'Cargo', input: 'TextArea', required: true, maxLength: 40 },
  { label: 'Descrição do Cargo', name: 'descricao', required: true, maxLength: 500 },
];

export { fields, fields2 };
