import {Injectable} from '@angular/core';
import {PieceModel} from '../models/piece.model';
import {
    BlackBishop,
    BlackKing,
    BlackKnight,
    BlackPawn,
    BlackQueen,
    BlackRook,
    WhiteBishop,
    WhiteKing,
    WhiteKnight,
    WhitePawn,
    WhiteQueen,
    WhiteRook,
} from '../utls/pieces';
import {SquareModel} from '../models/square.model';
import {MoveModel} from '../models/move.model';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public chessBoard: Array<Array<null | PieceModel>> = [
        [WhiteRook, WhiteKnight, WhiteBishop, WhiteQueen, WhiteKing, WhiteBishop, WhiteKnight, WhiteRook],
        [WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn],
        [BlackRook, BlackKnight, BlackBishop, BlackQueen, BlackKing, BlackBishop, BlackKnight, BlackRook],
    ];

    public originSquare: string | null = null;
    public destinationSquare: string | null = null;

    public move(_origin: SquareModel, _destination: SquareModel): void {
        const newMove: MoveModel = {
            origin: _origin,
            destination: _destination,
        };

        this.originSquare = null;
        this.destinationSquare = null;

        console.log(newMove);

        if (this.isMoveValid(newMove)) {
        }
    }

    public isMoveValid(_move: MoveModel): boolean {
        return false;
    }
}
