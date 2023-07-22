import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-chess-board',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent {
    public clickSquare(e: any): void {
        console.log(e.target.id);
    }
}
