import { Component, OnInit } from '@angular/core';
import { EventMessage } from 'src/app/Services/communication.service';
import { CommunicationService } from 'src/app/Services/communication.service';
@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'Tablets'
  };
  constructor(private comm: CommunicationService) { }

  ngOnInit() {
    this.comm.emit(this.emitMessage);
  }

}
