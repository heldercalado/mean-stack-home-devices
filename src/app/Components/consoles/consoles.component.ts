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
      position: relative;
      display: inline-block;
      font-size: 1.5rem;
      color: #659dbd;
    }
    .full {
      color: #daad86 ;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: #daad86;
    }
  `]
})
export class ConsolesComponent implements OnInit {
  pageName = 'Consoles';
  itemList: Item[] = [];
  currentRate = 3.2;
  reviewsQuantity = '(200)';
  constructor(private comm: CommunicationService, private itemsService: ItemsService, private ratingConfig: NgbRatingConfig) {
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
  getRandomRating() {

  this.currentRate = Math.floor(Math.random() * Math.floor(this.ratingConfig.max));
  console.log(this.currentRate);

  }
  getRandomReviewsNumber() {

    this.reviewsQuantity = '(' + Math.floor(Math.random() * Math.floor(500)) + ')';
    console.log(this.reviewsQuantity);
  }
}
