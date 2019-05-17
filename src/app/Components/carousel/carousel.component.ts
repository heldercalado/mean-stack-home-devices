import { Component, OnInit, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from '../../Services/items.service';
import { Item } from '../../Interfaces/item';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() SubCategory: [];
  doneLoading = false;
  sortedArray = [];
  mytext: string;
  itemsPerSlideA = 4;
  slidesPerCarousel = 4;
  items = {};
  itemList = [];
  page = [];
  constructor(config: NgbCarouselConfig, private itemService: ItemsService) {
    config.showNavigationIndicators = false;
  }
  @Input()
  set fireEvent(section: string) {
    console.log(section);
    this.mytext = section;
  }
  ngOnInit() {
    this.getItemList();
    this.SubCategory.filter(name => {
      const tempObject = {
        [name]: 1
      };
      this.page.push(tempObject);
    })

  }
  getItemList() {
    this.itemService.getItemList('All').subscribe((data: Item[]) => {
      this.itemList = data;

      this.newSort();


    });
  }
  sortData(argSubCategory) {

    let itemCounter = 0;

    let tempArray = this.itemList.filter(data => {
      if (itemCounter < (this.itemsPerSlideA * this.slidesPerCarousel)) {
        if (data.SubCategory === argSubCategory) {
          itemCounter += 1;
          return data;

        }
      }

    });
    let myObject = {};

    myObject[argSubCategory] = [];
    this.items[argSubCategory] = []
    for (let index = 0; index < this.slidesPerCarousel; index++) {
      const element = 'slide' + index;
      myObject[argSubCategory][element] = [];
    }

    for (let index = 0; index < tempArray.length; index++) {
      const element = tempArray[index];
      const SlideIndex = Math.floor(index / this.slidesPerCarousel)
      const keyName = 'slide' + SlideIndex;
      myObject[argSubCategory][keyName].push(element);


    }

    // console.log(myObject);
    // console.log(Object.keys(myObject));
    this.items[argSubCategory] = myObject[argSubCategory]

    // while (slideCounter <= this.slidesPerCarousel) {

    // }
  }
  getKeys(argSubcategory) {

    return Object.keys(this.items[argSubcategory]);
  }
  getValues(argSubcategory, argKey) {

    return this.items[argSubcategory][argKey];

  }
  allItemsLoaded() {
    if (Object.keys(this.items).length === 7) {
      console.log('done');

      this.doneLoading = true;
    } else {
      this.doneLoading = false;
    }
  }
  newSort() {

    this.SubCategory.map((data: string) => {
      let itemCounter = 0;
      const tempArray = this.itemList.filter(tempData => {
        if (itemCounter < (this.itemsPerSlideA * this.slidesPerCarousel)) {
          if (tempData.SubCategory === data) {
            itemCounter += 1;
            return tempData;

          }
        }

      });
      const myObject = {};
      myObject[data] = [];
      this.items[data] = [];
      for (let index = 0; index < this.slidesPerCarousel; index++) {
        const element = 'slide' + index;
        myObject[data][element] = [];
      }
      for (let index = 0; index < tempArray.length; index++) {
        const element = tempArray[index];
        const SlideIndex = Math.floor(index / this.slidesPerCarousel)
        const keyName = 'slide' + SlideIndex;
        myObject[data][keyName].push(element);


      }
      this.items[data] = myObject[data];
    });



    this.allItemsLoaded();
  }
  changePage(argPage, page) {
    console.log(page);
  }

  getRouterLinkFromSubCategory(argSubCategory) {

    if (argSubCategory === 'Desktop PC') {
      return '/desktopcomputers';
    } else if (argSubCategory === 'Laptop PC') {
      return '/laptopcomputers';
    } else if (argSubCategory === 'Games PC') {
      return '/computergames';
    } else if (argSubCategory === 'Consoles Xbox') {
      return '/xboxconsoles';
    } else if (argSubCategory === 'Games Xbox') {
      return '/xboxgames';
    } else if (argSubCategory === 'Consoles PlayStation') {
      return '/playstationconsoles';
    } else if (argSubCategory === 'Games PlayStation') {
      return '/playstationgames';
    }
  }

}
