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
import {Color} from '../enums/color';
import {PieceMoveRulesService} from './piece-move-rules.service';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public constructor(public pieceMoveRulesService: PieceMoveRulesService) {}
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

    public turn: Color = Color.White;

    public originSquare: string | null = null;
    public destinationSquare: string | null = null;

    public move(_origin: SquareModel, _destination: SquareModel): void {
        const newMove: MoveModel = {
            origin: _origin,
            destination: _destination,
            chessPiece: this.chessBoard[_origin.rank][_origin.file],
        };

        this.originSquare = null;
        this.destinationSquare = null;

        console.log(newMove);

        if (this.isMoveValid(newMove)) {
        }
    }

    public isMoveValid(_move: MoveModel): boolean {
        if (!_move.chessPiece) return false;
        if (_move.chessPiece.color !== this.turn) return false;
        if (
            !this.chessBoard[_move.destination.rank][_move.destination.file] &&
            this.chessBoard[_move.destination.rank][_move.destination.file]?.color === _move.chessPiece.color
        )
            return false;

        switch (_move.chessPiece) {
            case WhitePawn || BlackPawn: {
                break;
            }
            case WhiteKing || BlackKing: {
                break;
            }
            case BlackQueen || BlackQueen: {
                break;
            }
            case WhiteRook || BlackRook: {
                if (!this.pieceMoveRulesService.rookMove(_move)) {
                    if (!this.pieceMoveRulesService.isLineEmpty(_move)) return false;
                }
                break;
            }
            case WhiteBishop || BlackBishop: {
                break;
            }
            case WhiteKnight || BlackKnight: {
                break;
            }
        }
        return false;
    }
}
