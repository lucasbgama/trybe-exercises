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

function criarBotao(nome){
    let botao = document.createElement('button');
    botao.innerHTML = nome;
    return botao;
}

let botaoFeriados = criarBotao('Feriados');
botaoFeriados.id = 'btn-holiday';
let buttonsContainer = document.querySelector('.buttons-container');
buttonsContainer.appendChild(botaoFeriados);