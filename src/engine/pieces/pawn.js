import Piece from './piece';
import Square from "../square";
import Player from "../player";


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
    //    let location = []
        if (this.player === Player.WHITE) {
            // for (var row = 0; row < 8; row++) {
            //     for (var col = 0; col < 8; col++) {
            //         var currentpiece = board.board[row][col]
            //         var check = currentpiece typeof Pawn
            //         if (check){
            //             location.push(Square.at(row + 1, col))}
            //
            //     }
            // }

            return new Array(Square.at(1,0))
        }
        else {
            return new Array(Square.at(6, 7))
        }

    }
}
