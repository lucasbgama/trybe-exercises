function hydrate(bebidas) {
  const numberList = bebidas.match(/\d+/g);
  let agua = 0;
  for(let pos in numberList){
    agua += parseInt(numberList[pos]);
  }
  if(agua == 1){
    return('1 copo de água');
  } else {
    return(`${agua} copos de água`);
  }
}

module.exports = hydrate
