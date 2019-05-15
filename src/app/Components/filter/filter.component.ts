import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from 'src/app/Services/communication.service';
import { EventMessage } from 'src/app/Services/communication.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() ItemsPerPage = new EventEmitter<number>();
  @Output() SortBY = new EventEmitter<string>();
  @Output() SearchParams = new EventEmitter<string>();
  @Output() ResetFilter = new EventEmitter<boolean>();
  validSearch: boolean
  type = 'light';
  isNavbarCollapsed = true;
  outPutEmit: EventMessage = {
    Type: 'itemsPerPage',
    Value: ''
  }
  constructor(private comm: CommunicationService) { }

  ngOnInit() {
    this.ItemsPerPage.emit(20);
    // this.SortBY.emit('Newest');
    this.SearchParams.emit('');
  }
  setItemsPerPage(argValue) {

    this.ItemsPerPage.emit(argValue);

  }
  setSortByQuery(argValue) {

    this.SortBY.emit(argValue);

  }
  setSearchString(argValue) {
    if (argValue !== '') {
      this.SearchParams.emit(argValue);
      this.validSearch = true;
    } else {
      this.validSearch = false;
    }


  }
  resetFilter(search , sort , items) {

    search.value = '' ;
    sort.value = 'Newest' ;
    items.value = 20 ;
    this.ResetFilter.emit(true);
    this.validSearch = null;
  }
}
