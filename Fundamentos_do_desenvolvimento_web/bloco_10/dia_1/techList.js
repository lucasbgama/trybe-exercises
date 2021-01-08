function techList(array, name) {
  if(array.length == 0){
    return('Vazio!');
  } else{
    let objetos = [];
    array.sort();
    for(let pos in array){
      objetos.push(
        {
          tech: array[pos],
          name: name
        }
      )
    }
    return(objetos);
  }
}

module.exports = techList
