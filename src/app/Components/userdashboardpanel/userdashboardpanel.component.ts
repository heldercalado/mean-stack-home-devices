import { Component, OnInit, Input , Output } from '@angular/core';

@Component({
  selector: 'app-userdashboardpanel',
  templateUrl: './userdashboardpanel.component.html',
  styleUrls: ['./userdashboardpanel.component.css']
})
export class UserdashboardpanelComponent implements OnInit {
@Input() option: string;
  constructor() { }

  ngOnInit() {
  }
  setOption(argValue){
    this.option = argValue;
  }
}
