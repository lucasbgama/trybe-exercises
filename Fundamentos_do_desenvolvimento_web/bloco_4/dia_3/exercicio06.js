let n = 7;

let divisores = 2;

for ( let ind = 2; ind < n; ind += 1 ){
    if(n%ind == 0){
        divisores+=1;
    }
}

if(divisores === 2){
    console.log("É primo");
} else {
    console.log("Não é primo");
}