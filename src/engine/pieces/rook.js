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
        for (var row = place.row-1; row >= 0; row--) {
            if (board.getPiece(Square.at(row, place.col)) !== undefined) {break}
            else{location.push(Square.at(row, place.col))}
        }

        for (var row2 = place.row + 1; row2 < 8; row2++) {
            if (board.getPiece(Square.at(row2, place.col)) !== undefined) {break}
            else{location.push(Square.at(row2, place.col))}
        }

        for (var col = place.col-1; col >= 0; col--) {
            if (board.getPiece(Square.at(place.row, col)) !== undefined) {break}
            else {location.push(Square.at(place.row, col))}
        }

        for (var col2 = place.col + 1; col2 < 8; col2++) {
            if (board.getPiece(Square.at(place.row, col2)) !== undefined) {break}
            else {location.push(Square.at(place.row, col2))}
        }
        return location
    }
}
