import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = []
        var place = board.findPiece(this)
        if ((place.col + 2) <= 7) {
            if ((place.row + 1) <= 7) {
            location.push(Square.at(place.row + 1, place.col + 2))}
            if ((place.row - 1) >= 0) {
            location.push(Square.at(place.row - 1, place.col + 2))}
        }
        if ((place.col - 2) >= 0) {
            if ((place.row + 1) <= 7) {
            location.push(Square.at(place.row + 1, place.col - 2))}
            if ((place.row - 1) >= 0) {
            location.push(Square.at(place.row - 1, place.col - 2))}
        }
        if ((place.col + 1) <= 7) {
            if ((place.row + 2) <= 7) {
            location.push(Square.at(place.row + 2, place.col + 1))}
            if ((place.row - 2) >= 0) {
            location.push(Square.at(place.row - 2, place.col + 1))}
        }
        if ((place.col - 1) >= 0) {
            if ((place.row + 2) <= 7) {
            location.push(Square.at(place.row + 2, place.col - 1))}
            if ((place.row - 2) >= 0) {
            location.push(Square.at(place.row - 2, place.col - 1))}
        }


     return location}
    }

