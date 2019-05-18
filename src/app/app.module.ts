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
import { ItemsdisplayComponent } from './Components/itemsdisplay/itemsdisplay.component';
import { XboxgamesComponent } from './Components/xboxgames/xboxgames.component';
import { XboxconsolesComponent } from './Components/xboxconsoles/xboxconsoles.component';
import { PlaystationgamesComponent } from './Components/playstationgames/playstationgames.component';
import { PlaystationconsolesComponent } from './Components/playstationconsoles/playstationconsoles.component';
import { DesktopsComponent } from './Components/desktops/desktops.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { ComputergamesComponent } from './Components/computergames/computergames.component';
import { FilterComponent } from './Components/filter/filter.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';
import { CellphonesComponent } from './Components/cellphones/cellphones.component';
import { TabletsComponent } from './Components/tablets/tablets.component';
import { UsersidenavComponent } from './Components/usersidenav/usersidenav.component';

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
    ElectronicsComponent,
    ItemsdisplayComponent,
    XboxgamesComponent,
    XboxconsolesComponent,
    PlaystationgamesComponent,
    PlaystationconsolesComponent,
    DesktopsComponent,
    LaptopsComponent,
    ComputergamesComponent,
    FilterComponent,
    UserdashboardComponent,
    CellphonesComponent,
    TabletsComponent,
    UsersidenavComponent
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
