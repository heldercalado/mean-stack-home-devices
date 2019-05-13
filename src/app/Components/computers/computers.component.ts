import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';
import { CommunicationService } from 'src/app/Services/communication.service';
import { EventMessage } from 'src/app/Services/communication.service';
@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css'],
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 1.5rem;
      color: #659dbd;
    }
    .full {
      color: #daad86 ;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: #daad86;
    }
  `]
})
export class ComputersComponent implements OnInit {
  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'Computer'
  };
  itemList: Item[] = [];
  currentRate = 3.2;
  reviewsQuantity = '(200)';

  constructor(private itemsService: ItemsService, private comm: CommunicationService) { }

  ngOnInit() {
    this.getComputerItems();
    // send an emit event to app.component.ts to change the toolbar to computers

    this.comm.emit(this.emitMessage);

  }

  getComputerItems() {
    this.itemsService.getItemList('Desktop PC').subscribe((data: Item[]) => {

      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.itemList = data;

    });

  }

  formatFeatures(argString) {
    const myArray = argString.split(',');
    let sortedArray = myArray.filter(data => {
      if (data.indexOf('Type') === -1 && data.indexOf('Usage') === -1 && data.indexOf('Return') === -1) {
        return sortedArray += data + ',';
      }
    });

    return sortedArray;
  }


}
