import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/Services/communication.service';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
pageName = 'Consoles';
itemList: Item[] = [];
  constructor(private comm: CommunicationService , private itemsService: ItemsService) { }

  ngOnInit() {
    this.getConsoleItems();
    // send an emit event to app.component.ts to change the toolbar to computers
    this.comm.emit(this.pageName);

  }
getConsoleItems() {
  this.itemsService.getItemListbyCategory(this.pageName).subscribe((data: Item[]) => {
    this.itemList = data;

  });
}
}
