import {Directive, HostListener} from '@angular/core';
import {GameService} from '../../services/game.service';
import {SquareIfOnlyAndOnlyStringService} from '../../services/square-if-only-and-only-string.service';
@Directive({
    selector: '[appDragNDrop]',
})
export class DragNDropDirective {
    public constructor(private gameService: GameService) {}
    @HostListener('mousedown', ['$event']) private dragStart(e: any): void {
        e.preventDefault();
        if (e.target?.localName === 'div') {
            return;
        }

        this.gameService.originSquare = e.target.parentElement.id;
    }
    @HostListener('mouseup', ['$event']) private dragEnd(e: any): void {
        if (e.target.id === this.gameService.originSquare) {
            return;
        } else {
            this.gameService.destinationSquare = e.target.id;
        }

        if (!!this.gameService.originSquare && !!this.gameService.destinationSquare) {
            this.gameService.move(
                SquareIfOnlyAndOnlyStringService.stringToSquare(this.gameService.originSquare),
                SquareIfOnlyAndOnlyStringService.stringToSquare(this.gameService.destinationSquare)
            );
        }
    }
    // @HostListener('mouseover', ['$event']) private dragOver(e: any): void {
    //     if (!!this.gameService.originSquare) {
    //         console.log(e.target.src);
    //     }
    // }
}
