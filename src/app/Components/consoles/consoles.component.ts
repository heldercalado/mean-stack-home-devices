import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
pageName: string = 'Consoles';
  constructor() { }

  ngOnInit() {
  }

}
