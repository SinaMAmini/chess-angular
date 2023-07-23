import {PieceModel} from '../models/piece.model';
import {ChessPieces} from '../enums/chess-pieces';
import {Color} from '../enums/color';

export const WhiteKing: PieceModel = {
    chessPiece: ChessPieces.King,
    color: Color.White,
    point: 0,
    url: './assets/ChessPieces/WhiteKing.svg',
    alt: 'White King',
};
export const WhiteQueen: PieceModel = {
    chessPiece: ChessPieces.Queen,
    color: Color.White,
    point: 9,
    url: './assets/ChessPieces/WhiteQueen.svg',
    alt: 'WhiteQueen',
};
export const WhiteRook: PieceModel = {
    chessPiece: ChessPieces.Rook,
    color: Color.White,
    point: 5,
    url: './assets/ChessPieces/WhiteRook.svg',
    alt: 'White Rook',
};
export const WhiteBishop: PieceModel = {
    chessPiece: ChessPieces.Bishop,
    color: Color.White,
    point: 3,
    url: './assets/ChessPieces/WhiteBishop.svg',
    alt: 'White Bishop',
};
export const WhiteKnight: PieceModel = {
    chessPiece: ChessPieces.Knight,
    color: Color.White,
    point: 3,
    url: './assets/ChessPieces/WhiteKnight.svg',
    alt: 'White Knight',
};
export const WhitePawn: PieceModel = {
    chessPiece: ChessPieces.Pawn,
    color: Color.White,
    point: 1,
    url: './assets/ChessPieces/WhitePawn.svg',
    alt: 'White Pawn',
};
export const BlackKing: PieceModel = {
    chessPiece: ChessPieces.King,
    color: Color.Black,
    point: 0,
    url: './assets/ChessPieces/BlackKing.svg',
    alt: 'Black King',
};
export const BlackQueen: PieceModel = {
    chessPiece: ChessPieces.Queen,
    color: Color.Black,
    point: 9,
    url: './assets/ChessPieces/BlackQueen.svg',
    alt: 'Black Queen',
};
export const BlackRook: PieceModel = {
    chessPiece: ChessPieces.Rook,
    color: Color.Black,
    point: 5,
    url: './assets/ChessPieces/BlackRook.svg',
    alt: 'Black Rook',
};
export const BlackBishop: PieceModel = {
    chessPiece: ChessPieces.Bishop,
    color: Color.Black,
    point: 3,
    url: './assets/ChessPieces/BlackBishop.svg',
    alt: 'Black Bishop',
};
export const BlackKnight: PieceModel = {
    chessPiece: ChessPieces.Knight,
    color: Color.Black,
    point: 3,
    url: './assets/ChessPieces/BlackKnight.svg',
    alt: 'Black Knight',
};
export const BlackPawn: PieceModel = {
    chessPiece: ChessPieces.Pawn,
    color: Color.Black,
    point: 1,
    url: './assets/ChessPieces/BlackPawn.svg',
    alt: 'Black Pawn',
};
