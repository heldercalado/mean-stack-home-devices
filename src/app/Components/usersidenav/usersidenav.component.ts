import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-usersidenav',
  templateUrl: './usersidenav.component.html',
  styleUrls: ['./usersidenav.component.css']
})
export class UsersidenavComponent implements OnInit {
@Output() option = new EventEmitter<string>();
isNavbarCollapsed = false ;
  constructor() { }

  ngOnInit() {
  }
setOption(argOption){
  this.option.emit(argOption);
}
}
