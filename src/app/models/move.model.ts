import {SquareModel} from './square.model';
import {PieceModel} from './piece.model';

export interface MoveModel {
    origin: SquareModel;
    destination: SquareModel;
    chessPiece: PieceModel | null;
}
