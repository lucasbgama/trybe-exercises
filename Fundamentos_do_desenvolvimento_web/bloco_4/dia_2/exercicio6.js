let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for(let i=0; i< numbers.length; i+=1){
    if(numbers[i]%2 === 1){
        impares += 1;
    }
}

if (impares > 0) {
    console.log(`Há ${impares} valores ímpares no vetor.`);
} else {
    console.log("Nenhum valor ímpar encontrado.");
}
