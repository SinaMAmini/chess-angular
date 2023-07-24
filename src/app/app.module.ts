import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChessBoardModule} from './components/chess-board/chess-board.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ChessBoardModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
