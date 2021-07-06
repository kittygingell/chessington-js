import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
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
            location.push(Square.at(place.row - l, place.col - l))
        } return location
        }
}
