import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/Services/communication.service';
import {EventMessage} from 'src/app/Services/communication.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  type = 'light';
  isNavbarCollapsed = true;
  outPutEmit: EventMessage ={
    Type: 'itemsPerPage',
    Value: ''
  }
  constructor(private comm: CommunicationService) { }

  ngOnInit() {
  }
  setItemsPerPage(argValue) {


    this.outPutEmit.Value = argValue;
    this.comm.emit(this.outPutEmit);

  }
}
