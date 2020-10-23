let salarioBruto = 5000;

let aliquotaInss;
let ir;
let salarioLiquido;

//INSS
if(salarioBruto <= 1556.94){
    aliquotaInss = 0.08*salarioBruto;
} else if(salarioBruto <= 2594.92){
    aliquotaInss = 0.09*salarioBruto;
} else if(salarioBruto <= 5189.82){
    aliquotaInss = 0.11*salarioBruto;
} else {
    aliquotaInss = 570.88;
}

//IR

let salarioBase = salarioBruto - aliquotaInss;
if(salarioBase <= 1903.98){
    ir = 0;
} else if(salarioBase <= 2826.65){
    ir = 0.075*salarioBase - 142.8;
} else if(salarioBase <= 3751.05){
    ir = 0.15*salarioBase - 354.8;
} else if(salarioBase <= 4664.68){
    ir = 0.225*salarioBase - 636.13;
} else {
    ir = 0.275*salarioBase - 869.36;
}

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);