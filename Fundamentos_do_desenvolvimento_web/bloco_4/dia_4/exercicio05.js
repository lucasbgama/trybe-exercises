let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

info['recorrente'] = 'Sim';

for (let key in info){
    if(key != 'recorrente' || (info[key] != "Sim" || info2[key] != "Sim")){ 
        console.log(`${info[key]} e ${info2[key]}`);
    } else {
        console.log("Ambos recorrentes.");
    }
}