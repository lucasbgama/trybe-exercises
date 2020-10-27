let n = 5;


for(let linha=1; linha <= n; linha +=1){
    let aux = ' '.repeat(n-linha);
    console.log(aux + '*'.repeat(linha));
}