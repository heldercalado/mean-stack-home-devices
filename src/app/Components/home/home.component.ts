import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { CommunicationService } from 'src/app/Services/communication.service';
import {EventMessage} from 'src/app/Services/communication.service';
export interface Message {
  message: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subCategoryArray = ['Desktop PC', 'Laptop PC', 'Games PC', 'Consoles Xbox', 'Games Xbox', 'Consoles PlayStation', 'Games PlayStation', "Electronics Cell Phones", 'Electronics Tablets'];
  showLatest: string ;
  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'Home'
  };

  isNavbarCollapsed = true;
  constructor(private items: ItemsService, private comm: CommunicationService) { }
  message: string;
  ngOnInit() {
    // send an emit event to app.component.ts to change the toolbar to home
    this.comm.emit(this.emitMessage);


  }

emitChanges(arg) {
  
  console.log('emit changes called');
  this.showLatest = arg.path[0].childNodes[0].data;
}
}
