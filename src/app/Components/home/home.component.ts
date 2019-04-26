import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/Services/items.service';

export interface Message {
  message: string ;

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageName = 'Home';
  isNavbarCollapsed = true;
  constructor(private items: ItemsService) { }
  message: string;
  ngOnInit() {
    this.get_message();
  }
  get_message() {
  
    return this.items.getConfig().subscribe((data: Message) => {
      this.message = data.message ;
    });
  }
}
