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
            location.push(Square.at(place.row + i, place.col + i))
        }
        for (var j = 1; j < Math.min(north,west)+1; j++) {
            location.push(Square.at(place.row - j, place.col + j))
        }
        for (var k = 1; k < Math.min(south,east)+1; k++) {
            location.push(Square.at(place.row + k, place.col - k))
        }
        for (var l = 1; l < Math.min(south,west)+1; l++) {
            location.push(Square.at(place.row - l, place.col - l))
        }

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
