import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {
pageName: string = 'Computers';
  constructor() { }

  ngOnInit() {
  }

}
