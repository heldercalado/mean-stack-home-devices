import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items =[
    {
      name: 'Xbox One S 1TB Console - Anthem Bundle',
      imgLink: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/68-105-259-V08.jpg',
      price: '249.99'
    },
    {
      name: 'Xbox One S 1TB Console - Tom Clancys The Division 2 Bundle',
      imgLink: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-258-V01.jpg',
      price: '249.00'
    },
    {
      name: 'Xbox One S 1TB Console - Battlefield V Bundle',
      imgLink: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-250-V12.jpg',
      price: '300'
    },
    {
      name: 'Xbox One X 1TB Console - NBA 2K19 Bundle',
      imgLink: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/74-103-670-V07.jpg',
      price: '249.99'
    },
    {
      name: 'Xbox One S 1TB Console - Minecraft Creators Bundle',
      imgLink: 'https://c1.neweggimages.com/ProductImageCompressAll1280/68-105-252-V01.jpg',
      price: '248.99'
    },
    {
      name: 'Xbox One X 1TB Console - Fallout 76 Bundle',
      imgLink: 'https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/68-105-251-S01.jpg',
      price: '350.00'
    }
  ]
  images = this.items.map((data) => {
    return data.imgLink;
   });
  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
   }

  ngOnInit() {
  }

}
