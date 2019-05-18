import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';
import { CommunicationService } from 'src/app/Services/communication.service';
import { EventMessage } from 'src/app/Services/communication.service';
@Component({
  selector: 'app-computergames',
  templateUrl: './computergames.component.html',
  styleUrls: ['./computergames.component.css']
})
export class ComputergamesComponent implements OnInit {
  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'PC Games'
  };
  
  
  constructor(private itemsService: ItemsService, private comm: CommunicationService) { }

  ngOnInit() {

    // send an emit event to app.component.ts to change the toolbar to Desktop

    this.comm.emit(this.emitMessage);
  }
}
