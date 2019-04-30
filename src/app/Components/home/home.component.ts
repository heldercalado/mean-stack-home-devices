import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';
import { CommunicationService } from 'src/app/Services/communication.service';

export interface Message {
  message: string;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageName = 'Home';
  isNavbarCollapsed = true;
  constructor(private items: ItemsService, private comm: CommunicationService) { }
  message: string;
  ngOnInit() {

    this.comm.emit(this.pageName);


  }


}