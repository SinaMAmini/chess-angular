import {SquareModel} from './square.model';

export interface MoveModel {
    origin: SquareModel;
    destination: SquareModel;
}
