let config = document.getElementById('settings');
let confButton = document.getElementById('settings-button');

let confs = ['cor de fundo', 'cor do texto', 'tamanho da fonte', 'espacamento entre linhas', 'font family'];
function addConf(nome){
    let caixaTexto = document.createElement('input');
    caixaTexto.type = 'text';
    caixaTexto.placeholder = nome;
    config.appendChild(caixaTexto);
}

function abrirFecharConfig(){
    let n = config.children.length;
    if(n == 0){
        for(conf of confs){
            addConf(conf);
        }
    } else {
        for(let index = 0; index < n; index+=1){
            config.children[0].remove();
        }
    }
}

confButton.addEventListener('click', abrirFecharConfig);