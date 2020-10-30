function indMax (array){
    let max = 0;
    for(ind in array){
        if(array[ind] > array[max]){
            max = ind;
        }
    }
    return max;
}

let test = [2, 3, 6, 7, 10, 1];

console.log(indMax(test));