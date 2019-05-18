import { Component, OnInit } from '@angular/core';
import { EventMessage } from 'src/app/Services/communication.service';
import { CommunicationService } from 'src/app/Services/communication.service';

@Component({
  selector: 'app-cellphones',
  templateUrl: './cellphones.component.html',
  styleUrls: ['./cellphones.component.css']
})
export class CellphonesComponent implements OnInit {
  emitMessage: EventMessage = {
    Type: 'pageName',
    Value: 'Cell Phones'
  };

  constructor(private comm: CommunicationService) { }

  ngOnInit() {
    this.comm.emit(this.emitMessage);
  }

}
