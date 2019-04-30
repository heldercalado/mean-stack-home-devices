import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/Services/communication.service';
import { ItemsService } from 'src/app/Services/items.service';
import { Item } from '../../Interfaces/item';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #daad86;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #daad86;
    }
  `]
})
export class ConsolesComponent implements OnInit {
pageName = 'Consoles';
itemList: Item[] = [];
  constructor(private comm: CommunicationService , private itemsService: ItemsService, private ratingConfig: NgbRatingConfig) {
    ratingConfig.max = 5;
    ratingConfig.readonly = true;
   }

  ngOnInit() {
    this.getConsoleItems();
    // send an emit event to app.component.ts to change the toolbar to computers
    this.comm.emit(this.pageName);

  }
getConsoleItems() {
  this.itemsService.getItemListbyCategory(this.pageName).subscribe((data: Item[]) => {
    this.itemList = data;

  });
}
getRandomRating(){
  return Math.floor(Math.random() * Math.floor(this.ratingConfig.max));
}
getRandomReviewsNumber(){
  return '(' + Math.floor(Math.random() * Math.floor(500)) + ')';
}
}
