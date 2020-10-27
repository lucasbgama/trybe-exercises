let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//decrescente 
for(j=numbers.length - 1; j>0; j-=1){
    for (let i=0; i< j; i+=1){
        if(numbers[i]<numbers[i+1]){
            let aux = numbers[i];
            numbers[i] = numbers[i+1];
            numbers[i+1] = aux;
        }
    }
}

console.log(numbers);
