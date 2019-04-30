import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ItemComponent } from './Components/item/item.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { ConsolesComponent } from './Components/consoles/consoles.component';
import { GamesComponent } from './Components/games/games.component';
import { ComputersComponent } from './Components/computers/computers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'consoles', component: ConsolesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'computers', component: ComputersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
