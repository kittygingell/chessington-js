import Piece from './piece';
import Square from "../square";
import Player from "../player";


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = []
        var place = board.findPiece(this)
        if (this.player === Player.WHITE) {
            if (place.row!==1){
            location.push(Square.at(place.row + 1, place.col))}
            else {location.push(Square.at(2,place.col));
                location.push(Square.at(3,place.col))}
        } else {
            if (place.row!==6){
                location.push(Square.at(place.row - 1, place.col))}
            else {location.push(Square.at(5,place.col));
                location.push(Square.at(4,place.col))}
        }
        return location
    }
}

