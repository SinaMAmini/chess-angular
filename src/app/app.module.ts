import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChessBoardComponent} from './components/chess-board/chess-board.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ChessBoardComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
