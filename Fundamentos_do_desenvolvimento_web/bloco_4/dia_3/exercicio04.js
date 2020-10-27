let n = 5;

let linhas = Math.ceil(n/2);

for (let linha = 1; linha <= linhas; linha +=1){
    console.log(' '.repeat(n-linha) + '*'.repeat(2*linha - 1));
}