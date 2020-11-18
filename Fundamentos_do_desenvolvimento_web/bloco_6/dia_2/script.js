const data = document.getElementById('data');
data.DatePickerX.init({ format: 'dd/mm/yyyy' });

const btnSubmit = document.getElementById('submit');

const radioButtonNames = ['tipo'];

const form = document.getElementsByTagName('form')[0];
const body = document.getElementsByTagName('body')[0];

const estados = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RO',
  'RS',
  'RR',
  'SC',
  'SE',
  'SP',
  'TO',
];

const estadoSelect = document.getElementById('estado');
for (let index = 0; index < estados.length; index += 1) {
  const opt = document.createElement('option');
  opt.innerText = estados[index];
  opt.value = estados[index];
  estadoSelect.appendChild(opt);
}

new JustValidate('.js-form', {
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    cpf: {
      required: true,
    },
    end: {
      required: true,
    },
    cidade: {
      required: true,
    },
    estado: {
      required: true,
    },
    radio: {
      required: true,
    },
    resumo: {
      required: true,
    },
    cargo: {
      required: true,
    },
    descricao: {
      required: true,
    },
    data: {
      required: true,
    },
  },
  messages: {
    nome: 'Digite seu nome',
    email: 'Insira um email válido.',
    cpf: 'Insira seu CPF.',
    end: 'Insira seu endereço.',
    cidade: 'Insira sua cidade.',
    estado: 'Selecione um estado.',
    radio: 'Selecione um tipo.',
    resumo: 'Escreva um resumo do currículo.',
    cargo: 'Insira o cargo.',
    descricao: 'Insira uma descrição do cargo.',
    data: 'Insira a data de início.',
  },
  submitHandler: function (form, values) {
    showData(form, values);
  },
  invalidFormCallback: function () {
    window.alert('Dados inválidos!');
  },
});

function showData(form, values) {
  const showDataDiv = document.getElementById('show-data');
  if (showDataDiv !== null) {
    body.removeChild(showDataDiv);
  }
  const div = document.createElement('div');
  div.id = 'show-data';
  for (let index = 0; index < Object.keys(values).length; index += 1) {
    const p = document.createElement('p');
    if (!radioButtonNames.includes(Object.keys(values)[index])) {
      p.innerHTML = `${Object.keys(values)[index]}: ${
        values[Object.keys(values)[index]]
      }`;
    } else {
      let name = Object.keys(values)[index];
      const radio = document.getElementsByName(name);
      for (let pos = 0; pos < radio.length; pos += 1) {
        if (radio[pos].checked === true) {
          p.innerHTML = `${name}: ${radio[pos].value}`;
        }
      }
    }
    div.appendChild(p);
  }
  body.appendChild(div);
}

const btnLimpar = document.getElementById('reset');
btnLimpar.addEventListener('click', function () {
  const showDataDiv = document.getElementById('show-data');
  if (showDataDiv !== null) {
    body.removeChild(showDataDiv);
  }
});

window.JustValidate();
