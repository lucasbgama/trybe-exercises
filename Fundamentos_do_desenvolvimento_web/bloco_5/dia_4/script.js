let config = document.getElementById('settings');
let confButton = document.getElementById('settings-button');

let confs = ['cor de fundo', 'cor do texto', 'tamanho da fonte', 'espacamento entre linhas', 'font family'];
function addConf(nome){
    let caixaTexto = document.createElement('input');
    caixaTexto.type = 'text';
    caixaTexto.placeholder = nome;
    config.appendChild(caixaTexto);
}

function adicionaConfiguracoes(){
    for(conf of confs){
        addConf(conf);
    }
}

adicionaConfiguracoes();


confButton.addEventListener('click', function(){
    if(config.style.display == 'none'){
        config.style.display = 'inline-block';
    } else {
        config.style.display = 'none';
    }
});


let corDeFundo = config.children[0];
document.body.style.backgroundColor = localStorage.getItem('background-color');
corDeFundo.addEventListener('keyup',function(e){
    document.body.style.backgroundColor = e.target.value;
    localStorage.setItem('background-color',e.target.value );
})



let corTexto = config.children[1];
document.body.style.color = localStorage.getItem('color');
corTexto.addEventListener('keyup',function(e){
    document.body.style.color = e.target.value;
    localStorage.setItem('color',e.target.value );
})
