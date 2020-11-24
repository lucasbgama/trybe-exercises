const fatorial = (n) => (n == 1 ? n : n * fatorial(n - 1));

console.log(fatorial(4));

const maiorPalavra = (string) =>
  string.split(" ").sort((a, b) => b.length - a.length)[0];

// console.log(
//   maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")
// );

const count = document.getElementById("count");
let clickCount = 0;
const btnClick = document.getElementById("click-count-button");
btnClick.addEventListener("click", () => (count.innerText = clickCount += 1));

const stringFixa = `Tryber x aqui!`;
const substituiPorX = (string) => {
  const stringVect = stringFixa.split(" x ");
  let stringFinal = stringVect[0];
  for (let i = 1; i < stringVect.length; i += 1) {
    stringFinal = `${stringFinal} ${string} ${stringVect[i]}`;
  }
  return stringFinal;
};

console.log(substituiPorX("beto"));

const skills = ["html", "css", "javascript", "git", "raciocinio logico"];

const concat = (string) => {
  let stringFinal = `${substituiPorX("x")}
Minhas cinco principais habilidades são:`;
  for (let i = 0; i < skills.length; i += 1) {
    stringFinal += `
${skills[i]}`;
  }
  return stringFinal;
};

console.log(concat());
