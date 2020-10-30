function indMin (array){
    let min = 0;
    for(ind in array){
        if(array[ind] < array[min]){
            min = ind;
        }
    }
    return min;
}

let test = [2, 4, 6, 7, 10, 0, -3];

console.log(indMin(test));