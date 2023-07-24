import {Injectable} from '@angular/core';
import {SquareModel} from '../models/square.model';

@Injectable({
    providedIn: 'root',
})
export class SquareIfOnlyAndOnlyStringService {
    public static fileToNumber: Map<string, number> = new Map([
        ['a', 0],
        ['b', 1],
        ['c', 2],
        ['d', 3],
        ['e', 4],
        ['f', 5],
        ['g', 6],
        ['h', 7],
    ]);
    public static stringToSquare(_stringSquare: string): SquareModel {
        return <SquareModel>{
            file: this.fileToNumber.get(_stringSquare[0]),
            rank: Number.parseInt(_stringSquare[1]) - 1,
        };
    }

    // public static squareToString(_Square: SquareModel): string {
    //     let output: string = '';
    //
    //     // @ts-ignore
    //     output = this.fileToNumber(_Square.file);
    //     return output;
    // }
}
