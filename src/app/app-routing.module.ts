import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemComponent } from './Components/item/item.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { ConsolesComponent } from './Components/consoles/consoles.component';
import { GamesComponent } from './Components/games/games.component';
import { ComputersComponent } from './Components/computers/computers.component';
import { ComputergamesComponent } from './Components/computergames/computergames.component';
import { XboxconsolesComponent } from './Components/xboxconsoles/xboxconsoles.component';
import { XboxgamesComponent } from './Components/xboxgames/xboxgames.component';
import { PlaystationconsolesComponent } from './Components/playstationconsoles/playstationconsoles.component';
import { PlaystationgamesComponent } from './Components/playstationgames/playstationgames.component';
import { DesktopsComponent } from './Components/desktops/desktops.component';
import { LaptopsComponent } from './Components/laptops/laptops.component';
import { CellphonesComponent } from './Components/cellphones/cellphones.component';
import { TabletsComponent } from './Components/tablets/tablets.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'consoles', component: ConsolesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'computers', component: ComputersComponent },
  { path: 'desktopcomputers', component: DesktopsComponent },
  { path: 'laptopcomputers', component: LaptopsComponent },
  { path: 'computergames', component: ComputergamesComponent },
  { path: 'xboxconsoles', component: XboxconsolesComponent },
  { path: 'xboxgames', component: XboxgamesComponent },
  { path: 'playstationconsoles', component: PlaystationconsolesComponent },
  { path: 'playstationgames', component: PlaystationgamesComponent },
  { path: 'cellphones', component: CellphonesComponent },
  { path: 'tablets', component: TabletsComponent },
  { path: 'userdashboard', component: UserdashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
