import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChessBoardComponent} from './chess-board.component';
import {DragNDropDirective} from './drag-n-drop.directive';

@NgModule({
    declarations: [ChessBoardComponent, DragNDropDirective],
    imports: [CommonModule],
    exports: [ChessBoardComponent],
})
export class ChessBoardModule {}
