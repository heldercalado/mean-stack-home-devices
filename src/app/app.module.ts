import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http client import for the services
import { HttpClientModule } from '@angular/common/http';

// custom pipe for phone number formatting
import { PhonePipe } from 'src/app/pipe/phonepipe';

// angular-jwt module
import { JwtModule } from '@auth0/angular-jwt';

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
import { UsermessagesComponent } from './Components/usermessages/usermessages.component';
import { UserdashboardpanelComponent } from './Components/userdashboardpanel/userdashboardpanel.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ItemsreviewComponent } from './Components/itemsreview/itemsreview.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    UsersidenavComponent,
    UsermessagesComponent,
    UserdashboardpanelComponent,
    MessagesComponent,
    OrdersComponent,
    SettingsComponent,
    ItemsreviewComponent,
    PhonePipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
