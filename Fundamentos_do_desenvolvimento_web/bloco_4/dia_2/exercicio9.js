let vet = [];

for(i=1; i<=25; i+= 1){
    vet.push(i);
}

let vet_2 = [];

for(i=0;i<vet.length; i+=1){
    vet_2.push(vet[i]/2);
}
console.log(vet_2);