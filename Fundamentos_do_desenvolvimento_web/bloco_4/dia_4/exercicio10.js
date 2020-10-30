function contaElementos(numero, numeros){
    cont = 0;
    for(e in numeros){
        if(numeros[e] === numero){
            cont += 1;
        }
    }
    return cont;
}

function maisRepete(numeros){
    let elemento = numeros[0];
    
    for(let i in numeros){
        if(contaElementos(numeros[i], numeros) > contaElementos(elemento, numeros)){
            elemento = numeros[i];
        }
    }
    return elemento;
}

let test = [2, 3, 2, 5, 8, 2, 3];

console.log(maisRepete(test));