function maiorNome (nomes){
    let maior = nomes[0];
    for(nome in nomes){
        if(nomes[nome].length > maior.length){
            maior = nomes[nome];
        }
    }
    return maior;
}

let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(test));