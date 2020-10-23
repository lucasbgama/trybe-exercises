let valorCusto = 100;
let valorVenda = 180;

if(valorCusto < 0 || valorVenda < 0){
    console.log("Erro. Dados inválidos.")
} else{
    let impostoSobreOCusto = 0.2*valorCusto;
    let valorCustoTotal = valorCusto + impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;
    let lucroTotal = 1000*lucro;

    console.log(lucroTotal);
}