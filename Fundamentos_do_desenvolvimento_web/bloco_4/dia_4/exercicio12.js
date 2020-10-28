function verificaFimPalavra(word, ending){
    let cont = 0;
    for(letra in ending){
        if(ending[ending.length - letra - 1] === word[word.length - letra - 1]){
            cont += 1;
        } else {
            break;
        }
    }
    if (cont === ending.length){
        return true;
    } else {
        return false;
    }
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));