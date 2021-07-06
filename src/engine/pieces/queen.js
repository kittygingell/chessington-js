import Piece from './piece';
import Square from "../square";

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = []
        var place = board.findPiece(this)
        const north = 7-place.col
        const east = 7-place.row
        const south = 7-north
        const west = 7-east
        for (var i = 1; i < Math.min(north,east)+1; i++) {
            if (board.getPiece(Square.at(place.row + i, place.col + i)) !== undefined) {break}
            else location.push(Square.at(place.row + i, place.col + i))
        }

        for (var j = 1; j < Math.min(north,west)+1; j++) {
            if (board.getPiece(Square.at(place.row - j, place.col + j)) !== undefined) {break}
            location.push(Square.at(place.row - j, place.col + j))
        }
        for (var k = 1; k < Math.min(south,east)+1; k++) {
            if (board.getPiece(Square.at(place.row + k, place.col - k)) !== undefined) {break}
            location.push(Square.at(place.row + k, place.col - k))
        }
        for (var l = 1; l < Math.min(south,west)+1; l++) {
            if (board.getPiece(Square.at(place.row - l, place.col - l)) !== undefined) {break}
            location.push(Square.at(place.row - l, place.col - l))}

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
