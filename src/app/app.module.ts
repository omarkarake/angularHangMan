import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { NavigatioHeaderComponent } from './components/navigatio-header/navigatio-header.component';
import { PickCategoryComponent } from './pages/pick-category/pick-category.component';
import { InGameComponent } from './pages/in-game/in-game.component';
import { PauseMenuComponent } from './pages/pause-menu/pause-menu.component';
import { YouWinComponent } from './pages/you-win/you-win.component';
import { YouLoseComponent } from './pages/you-lose/you-lose.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HowToPlayComponent,
    NavigatioHeaderComponent,
    PickCategoryComponent,
    InGameComponent,
    PauseMenuComponent,
    YouWinComponent,
    YouLoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
