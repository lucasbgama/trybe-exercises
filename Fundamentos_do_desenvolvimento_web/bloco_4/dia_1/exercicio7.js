let porcent = -7;

let conceito;

if(porcent > 100 || porcent < 0){
    conceito = "valor inválido";
} else if (porcent >= 90){
    conceito = "A";
} else if (porcent >= 80){
    conceito = "B";
} else if(porcent >= 70){
    conceito = "C";
} else if(porcent >= 60){
    conceito = "D";
} else if(porcent >= 50){
    conceito = "E";
} else {
    conceito = "F";
}

console.log(conceito);