import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaygroundComponent } from './components/playground/playground.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TetrisService } from './services/tetris.service';
import { GameInfoComponent } from './components/game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    NavigationComponent,
    GameInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [TetrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
