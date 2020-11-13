const data = document.getElementById('data');
const btnSubmit = document.getElementById('submit');

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

function validateData(dataString) {
  if (dataString.match(/^((\d{2})[/]){2}(\d{4})$/)) {
    const dia = parseInt(dataString.slice(0, 2));
    const mes = parseInt(dataString.slice(3, 5));
    if (dia <= 31 && mes <= 12 && dia * mes != 0) {
      return true;
    }
  }
  return false;
}

function showData(e) {
  const showDataDiv = document.getElementById('show-data');
  if (showDataDiv !== null) {
    body.removeChild(showDataDiv);
  }
  const div = document.createElement('div');
  div.id = 'show-data';
  for (index = 0; index < e.target.form.length - 2; index += 1) {
    if (e.target.form[index].value !== undefined) {
      if (
        e.target.form[index].type !== 'radio' ||
        e.target.form[index].checked === true
      ) {
        const p = document.createElement('p');
        p.innerHTML = `${e.target.form[index].name}: ${e.target.form[index].value}`;
        div.appendChild(p);
      }
    }
  }
  body.appendChild(div);
}

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  if (validateData(data.value) && form.checkValidity()) {
    showData(e);
  } else {
    window.alert('Dados inválidos!');
  }
});

const btnLimpar = document.getElementById('reset');
btnLimpar.addEventListener('click', function () {
  const showDataDiv = document.getElementById('show-data');
  if (showDataDiv !== null) {
    body.removeChild(showDataDiv);
  }
});
