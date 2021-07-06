import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = []
        var place = board.findPiece(this)
        if ((place.row + 1) <=7){
            if ((place.col + 1) <=7){
                location.push(Square.at(place.row + 1, place.col + 1))}
            location.push(Square.at(place.row + 1, place.col))
            if ((place.col - 1) >= 0){
                location.push(Square.at(place.row + 1, place.col - 1))
            }}
        if ((place.row - 1) >=0){
            if ((place.col + 1) <=7){
                location.push(Square.at(place.row - 1, place.col + 1))}
            location.push(Square.at(place.row - 1, place.col))
            if ((place.col - 1) >= 0){
                location.push(Square.at(place.row - 1, place.col - 1))
            }}
        if ((place.col + 1) <=7){
        location.push(Square.at(place.row, place.col + 1))}
        if ((place.col - 1) >= 0){
        location.push(Square.at(place.row, place.col - 1))}

        return location}

}
