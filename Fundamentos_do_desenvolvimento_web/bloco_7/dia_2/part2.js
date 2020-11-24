const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addPar = (obj, chave, valor) => (obj[chave] = valor);

addPar(lesson2, "turno", "manhã");

const listKeys = (obj) => console.log(Object.keys(obj));

listKeys(lesson2);

const sizeObj = (obj) => console.log(Object.keys(obj).length);
sizeObj(lesson2);

const mostrarValores = (obj) => console.log(Object.values(obj));
mostrarValores(lesson2);

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

const contaAlunos = (obj) => {
  let cont = 0;
  for (let i in Object.keys(obj)) {
    cont += obj[Object.keys(obj)[i]].numeroEstudantes;
  }
  return cont;
};

console.log(contaAlunos(allLessons));

const getValueByNumber = (obj, n) => Object.values(obj)[n];

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => {
  for (let i in Object.entries(obj)) {
    const v = Object.entries(obj)[i];
    if (v[0] === key && v[1] === value) {
      return true;
    }
  }
  return false;
};
console.log(verifyPair(lesson3, "turno", "noite"));
console.log(verifyPair(lesson3, "materia", "Maria Clara"));

//BONUS

const contDisciplina = (obj, materia) => {
  let cont = 0;
  const lessons = Object.values(obj);
  for (let i in lessons) {
    if (lessons[i].materia === materia) {
      cont += lessons[i].numeroEstudantes;
    }
  }
  return cont;
};

console.log(contDisciplina(allLessons, "Matemática"));

const relatorio = (obj, prof) => {
  let cont = 0;
  let aulas = [];
  for (let i in Object.keys(obj)) {
    if (verifyPair(obj[Object.keys(obj)[i]], "professor", prof)) {
      cont += obj[Object.keys(obj)[i]].numeroEstudantes;
      aulas.push(obj[Object.keys(obj)[i]].materia);
    }
  }

  const rel = Object.assign(
    {},
    { professor: prof, aulas: aulas, estudantes: cont }
  );
  return rel;
};

console.log(relatorio(allLessons, "Maria Clara"));
