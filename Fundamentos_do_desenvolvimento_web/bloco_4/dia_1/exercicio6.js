let peca='QUEEN';
let result;

switch(peca.toLocaleLowerCase()){
    case 'pawn':
        result = 'A pawn can move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file, provided both squares are unoccupied.'
        break;
    case 'knight':
        result = 'A knight moves to any of the closest squares that are not on the same rank, file, or diagonal.'
        break;
    case 'queen':
        result = 'A queen combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.'
        break;
    case 'bishop':
        result = 'A bishop can move any number of squares diagonally, but cannot leap over other pieces.'
        break;
    case 'rook':
        result = 'A rook can move any number of squares along a rank or file, but cannot leap over other pieces.'
        break;
    case 'king':
        result = 'The king moves one square in any direction.'
        break;
    default:
        result = 'Error. Invalid piece.';
}

console.log(result);