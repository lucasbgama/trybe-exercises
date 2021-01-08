const vogais = {
  a:1,
  e:2,
  i:3,
  o:4,
  u:5
}

function encode(string) {
  let stringEnc = '';
  for(let pos in string){
    if(string[pos] in vogais){
      stringEnc += vogais[string[pos]];
    } else {
      stringEnc += string[pos];
    }
  }
  return stringEnc;
}

function decode(string) {
  let stringDec = '';
  for(let pos in string){
    if(Object.values(vogais).includes(parseInt(string[pos]))){
      for(let vog in vogais){
        if(vogais[vog] == string[pos]){
          stringDec += vog;
        }
      }
    } else {
      stringDec += string[pos];
    }
  }
  return stringDec;
}

module.exports = { encode, decode };
