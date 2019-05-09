import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from 'src/app/Services/communication.service';
import {EventMessage} from 'src/app/Services/communication.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() pageName: string ;
  isNavbarCollapsed = true;
  outPutEmit: EventMessage ={
    Type: 'itemsPerPage',
    Value: ''
  }
  constructor(private comm: CommunicationService) { }

  ngOnInit() {
  }

  changeToolbarState(){
    this.isNavbarCollapsed =  !this.isNavbarCollapsed;
  }

  setItemsPerPage(argValue) {


    this.outPutEmit.Value = argValue;
    this.comm.emit(this.outPutEmit);

  }
  setItemsToDisplay(argValue) {
    this.outPutEmit.Type = argValue;
    this.outPutEmit.Value = argValue;
    this.comm.emit(this.outPutEmit);

  }


}
