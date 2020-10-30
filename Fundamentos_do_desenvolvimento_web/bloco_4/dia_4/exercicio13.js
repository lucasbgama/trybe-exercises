let algarismos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}


function romanToDec (romano){
    let n = 0;
    let ant = algarismos[romano[0]];
    for(r in romano){
        if(algarismos[romano[r]] <= ant){
            n += algarismos[romano[r]];
        } else {
            n += algarismos[romano[r]] -2*ant;
        }
        ant = algarismos[romano[r]];
    }
    return n;

}

console.log(romanToDec('DCCCXLIV'));