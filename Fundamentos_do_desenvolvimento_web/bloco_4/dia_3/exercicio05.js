let n = 13;

let linhas = Math.ceil(n/2);
let espacos = Math.floor(n/2);

console.log(' '.repeat(espacos) + '*');

for (linha =1; linha < linhas -1 ; linha += 1){
    console.log(' '.repeat(espacos - linha) + '*' + ' '.repeat(2*linha - 1) + '*');
}

console.log('*'.repeat(n));