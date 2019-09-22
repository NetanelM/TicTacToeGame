import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MetaDataService } from "./service/metaData/meta-data.service";
import {PopupWinsComponent} from "./popup-wins/popup-wins.component";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PopupWinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
