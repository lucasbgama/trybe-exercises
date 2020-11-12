let config = document.getElementById('settings');
let confButton = document.getElementById('settings-button');

let confs = ['cor de fundo', 'cor do texto', 'tamanho da fonte', 'espacamento entre linhas', 'font family'];
let confsJs = ['backgroundColor', 'color', 'fontSize', 'lineHeight','fontFamily'];

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

for(index = 0; index< config.children.length; index+=1){
    let propertyJs = confsJs[index];
    document.body.style[propertyJs] = localStorage.getItem(propertyJs);
    config.children[index].addEventListener('keyup',function(e){
        document.body.style[propertyJs]=e.target.value;
        localStorage.setItem(propertyJs, e.target.value);
    })
}