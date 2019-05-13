import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../Interfaces/item';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  itemList = [];
  images = this.itemList.map((data) => {
    return data.ImgUrl;
  });
  constructor(config: NgbCarouselConfig, private itemService: ItemsService) {
    config.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.getItemList();
  }
  getItemList() {
    this.itemService.getItemList('Desktop PC').subscribe((data: Item[]) => {
      this.itemList = data;

    });
  }
}
