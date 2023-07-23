import {Color} from '../enums/color';
import {ChessPieces} from '../enums/chess-pieces';

export interface PieceModel {
    chessPiece: ChessPieces;
    color: Color;
    point: number;
    url: string;
    alt: string;
}
