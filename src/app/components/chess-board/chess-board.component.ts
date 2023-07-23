import {Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-chess-board',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage],
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent implements AfterViewInit {
    @ViewChild('board') private boardTable?: ElementRef<HTMLTableElement>;
    public constructor(
        private renderer: Renderer2,
        private gameService: GameService
    ) {}

    public ngAfterViewInit(): void {
        for (let i = 7; i >= 0; i--) {
            for (let j = 0; j < 8; j++) {
                if (!!this.gameService.chessBoard[i][j]) {
                    const img = this.renderer.createElement('img');
                    this.renderer.setProperty(img, 'src', this.gameService.chessBoard[i][j]?.url);
                    this.renderer.setProperty(img, 'alt', this.gameService.chessBoard[i][j]?.alt);
                    this.renderer.appendChild(this.boardTable?.nativeElement.children[i].children[j].children[0], img);
                }
            }
        }
    }
    public clickSquare(e: any): void {}
}
