import {Injectable} from '@angular/core';
import {MoveModel} from '../models/move.model';
import {GameService} from './game.service';

@Injectable({
    providedIn: 'root',
})
export class PieceMoveRulesService {
    public constructor(public gameService: GameService) {}
    public rookMove(_move: MoveModel): boolean {
        return _move.origin.file === _move.destination.file || _move.origin.rank === _move.destination.rank;
    }

    public isLineEmpty(_move: MoveModel): boolean {
        if (_move.origin.file === _move.destination.file && _move.origin.rank > _move.destination.rank) {
            for (let i = _move.origin.rank - 1; i > _move.destination.rank; i--) {
                if (!this.gameService.chessBoard[i][_move.origin.file]) return false;
            }
        } else if (_move.origin.file === _move.destination.file && _move.origin.rank < _move.destination.rank) {
            for (let i = _move.origin.rank + 1; i < _move.destination.rank; i++) {
                if (!this.gameService.chessBoard[i][_move.origin.file]) return false;
            }
        } else if (_move.origin.rank === _move.destination.rank && _move.origin.file > _move.destination.file) {
            for (let i = _move.origin.file - 1; i > _move.destination.file; i--) {
                if (!this.gameService.chessBoard[_move.origin.rank][i]) return false;
            }
        } else if (_move.origin.rank === _move.destination.rank && _move.origin.file < _move.destination.file) {
            for (let i = _move.origin.file + 1; i < _move.destination.file; i++) {
                if (!this.gameService.chessBoard[_move.origin.rank][i]) return false;
            }
        }
        return true;
    }
}
