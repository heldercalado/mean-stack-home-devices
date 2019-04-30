import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';
import { CommunicationService } from 'src/app/Services/communication.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
  pageName: string = 'Computers';
  itemList: Item[] = [];
  constructor(private itemsService: ItemsService, private comm: CommunicationService) { }

  ngOnInit() {
    this.getComputerItems();
    this.comm.emit(this.pageName);
  }

  getComputerItems() {
    this.itemsService.getItemListbyCategory(this.pageName).subscribe((data: Item[]) => {
      this.itemList = data;

    });

  }


}
