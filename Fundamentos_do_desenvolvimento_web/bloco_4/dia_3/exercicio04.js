let n = 7;

let linhas = Math.ceil(n/2);

if(n%2 === 1){
    for (let linha = 1; linha <= linhas; linha +=1){
        console.log(' '.repeat(n-linha) + '*'.repeat(2*linha - 1));
    }
} else{
    for (let linha = 1; linha <= linhas; linha +=1){
        console.log(' '.repeat(n-linha) + '*'.repeat(2*linha));
    }
}