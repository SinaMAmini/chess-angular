import {Directive, HostListener} from '@angular/core';
import {GameService} from '../../services/game.service';

@Directive({
    selector: '[appDragNDrop]',
})
export class DragNDropDirective {
    public constructor(private gameService: GameService) {}
    @HostListener('mousedown', ['$event']) private dragStart(e: any): void {
        e.preventDefault();
        if (e.target?.localName === 'div' && this.gameService.originSquare === null) {
            return;
        }

        this.gameService.originSquare = e.target.parentElement.id;
        console.log(e.target);
    }
    @HostListener('mouseup', ['$event']) private dragEnd(e: any): void {
        if (e.target.id === this.gameService.originSquare) {
            return;
        } else {
            this.gameService.destinationSquare = e.target.id;
        }
    }
}
