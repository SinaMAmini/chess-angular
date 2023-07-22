import {Injectable} from '@angular/core';
import {PieceModel} from '../models/piece.model';

@Injectable({
    providedIn: 'root',
})
export class GameService {
    public chessBoard: Array<Array<null | PieceModel>> = [
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
    ];
    constructor() {}
}
