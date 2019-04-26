import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http client import for the services
import { HttpClientModule } from '@angular/common/http';

// bootstrap module
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemComponent } from './Components/item/item.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ConsolesComponent } from './Components/consoles/consoles.component';
import { GamesComponent } from './Components/games/games.component';
import { ComputersComponent } from './Components/computers/computers.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    ItemComponent,
    ToolbarComponent,
    ConsolesComponent,
    GamesComponent,
    ComputersComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
