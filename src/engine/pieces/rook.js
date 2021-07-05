import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = []
        var place = board.findPiece(this)
        for (var row = 0; row < place.row; row++) {
            location.push(Square.at(row, place.col))
        }

        for (var row2 = place.row + 1; row2 < 8; row2++) {
            location.push(Square.at(row2, place.col))
        }

        for (var col = 0; col < place.col; col++) {
            location.push(Square.at(place.row, col))
        }

        for (var col2 = place.col + 1; col2 < 8; col2++) {
            location.push(Square.at(place.row, col2))
        }

        return location
    }
}
