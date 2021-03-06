function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let days = document.getElementById('days');

  function addDays(){

      for(let day of dezDaysList){
          let elementDay = document.createElement('li');
          elementDay.className = 'day';
          elementDay.innerHTML = day;
          days.appendChild(elementDay);
    
          if(day == 24 || day == 25 || day == 31){
              elementDay.classList.add('holiday');
          }
    
          if(day == 4 || day == 11 || day == 18 || day == 25){
            elementDay.classList.add('friday');
          }
      }
  }

  addDays();

function criarBotao(nome){
    let botao = document.createElement('button');
    botao.innerHTML = nome;
    return botao;
}

let botaoFeriados = criarBotao('Feriados');
botaoFeriados.id = 'btn-holiday';
let buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.appendChild(botaoFeriados);

function corFeriado(){
    let feriados = document.getElementsByClassName('holiday');
    let novaCor = 'red';
    if(feriados[0].style.backgroundColor == novaCor){
        novaCor = 'rgb(238,238,238)';
    }
    for(feriado of feriados){
        feriado.style.backgroundColor = novaCor;
    }
}

function mudaCorFeriado(){
    botaoFeriados.addEventListener('click', corFeriado);
}
mudaCorFeriado();

function criaBotaoSextaFeira(){
    let botaoSextaFeira = criarBotao('Sexta-Feira');
    botaoSextaFeira.id = 'btn-friday';
    buttonsContainer.appendChild(botaoSextaFeira);
}

criaBotaoSextaFeira();

function textoSexta(){
    let botaoSextaFeira = document.getElementById('btn-friday');
    let sextasFeiras = document.getElementsByClassName('friday');
    botaoSextaFeira.addEventListener('click', function(){
        let novoTexto = 'Sexta!';
        if(sextasFeiras[0].innerHTML == novoTexto){
            for(index in sextasFeiras){
                sextasFeiras[index].innerHTML = 4 + 7*index;
            }
        } else {
            for(index in sextasFeiras){
                sextasFeiras[index].innerHTML = novoTexto;
            }
        }
    });
}

textoSexta();


for(day of days.children){
    day.addEventListener('mouseover',function(event){
        event.target.style.fontSize = '25px';
    });
    day.addEventListener('mouseleave',function(event){
        event.target.style.fontSize = '20px';
    });
}

function addTarefa(nome){
    let tarefa = 'Fazer arroz e feijão';
    let tarefaElemento = document.createElement('span');
    tarefaElemento.innerHTML = `${nome}: ${tarefa}`;
    let tasks = document.querySelector('.my-tasks');
    tasks.appendChild(tarefaElemento);
}

addTarefa('Cozinhar');

function addLegenda(cor){
    let legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    let tasks = document.querySelector('.my-tasks');
    tasks.appendChild(legenda);
}

addLegenda('orange');

function selectTask(){
    let legendas = document.querySelectorAll('.task');
    for(legenda of legendas){
        legenda.addEventListener('click',function(event){
            if(event.target.classList.contains('selected')){
                event.target.classList.remove('selected');
            } else{
                event.target.classList.add('selected')
            }
        })
    }
}

selectTask();

function dayTaskSelected(){
    for(day of days.children){
        day.addEventListener('click',function(event){
            let selected = document.querySelector('.selected');
            if(selected != null){
                let color = selected.style.backgroundColor;
                event.target.style.color = (event.target.style.color == color)? 'rgb(119,119,119)':color;
            }
        })
    }
}

dayTaskSelected();

function adicionarCompromisso(){
    function add(){
        if(caixaTexto.value ==''){
            alert('Erro.');
        } else{
            let novaTask = document.createElement('li');
            novaTask.innerHTML = caixaTexto.value;
            lista.appendChild(novaTask);
        }
    }
    let caixaTexto = document.getElementById('task-input');
    let botaoAdd = document.getElementById('btn-add');
    let lista = document.querySelector('.task-list');
    botaoAdd.addEventListener('click', add);

    caixaTexto.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            add();
        }
    })
}

adicionarCompromisso();