function palindromo(palavra){
    let cont = 0;
    for(pos in palavra){
        if(palavra[pos] === palavra[palavra.length - pos -1]){
            cont += 1;
        } else{
            break;
        }
    }
    if(cont === palavra.length){
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('arara'));