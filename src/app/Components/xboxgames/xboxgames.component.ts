import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';
import { CommunicationService } from 'src/app/Services/communication.service';
import { EventMessage } from 'src/app/Services/communication.service';


@Component({
  selector: 'app-xboxgames',
  templateUrl: './xboxgames.component.html',
  styleUrls: ['./xboxgames.component.css']
})
export class XboxgamesComponent implements OnInit {

  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'Xbox Games'
  };
  itemList: Item[] = [];
  currentRate = 3.2;
  reviewsQuantity = '(200)';
  constructor(private itemsService: ItemsService, private comm: CommunicationService) { }

  ngOnInit() {

    // send an emit event to app.component.ts to change the toolbar to Desktop

    this.comm.emit(this.emitMessage);
  }

}
