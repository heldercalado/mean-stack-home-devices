import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
option = '';
  constructor() { }

  ngOnInit() {
  }

  setOption(argOption){
    console.log(argOption);
    this.option = argOption;
  }

}
