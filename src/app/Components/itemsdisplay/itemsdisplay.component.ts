import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../Interfaces/item';
import { CommunicationService } from 'src/app/Services/communication.service';
import { ItemsService } from 'src/app/Services/items.service';
import { EventMessage } from 'src/app/Services/communication.service';


@Component({
  selector: 'app-itemsdisplay',
  templateUrl: './itemsdisplay.component.html',
  styleUrls: ['./itemsdisplay.component.css'],
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
export class ItemsdisplayComponent implements OnInit {
  @Input() itemType: string;
  ItemsPerPage = 20;
  SortBy: string;
  SearchKeyWord: string;
  originalListOfItems: Item[];
  currentlListOfItems: Item[];
  listOfItems: Item[];
  sortedListOfItems: Item[];
  itemList: Item[] = [];
  currentRate = 3.2;
  reviewsQuantity = '(200)';
  pageNumber = 1;
  totalItems = 0;
  rotate = false;
  paginationSize = '';
  currentWindowWidth: number;
  constructor(private comm: CommunicationService, private itemsService: ItemsService) { }

  // back up
  // this.currentWindowWidth = window.innerWidth;
  // console.log(this.currentWindowWidth);
  // this.setPaginationSize();
  // this.comm.itemsPerPage.subscribe((data: EventMessage) => {
  //   this.pageNumber = 1;
  //   this.ItemsPerPage = data.Value;


  // });
  // end of backup




  ngOnInit() {

    if (this.itemType === 'Computer') {
      this.getList('Consoles PlayStation');
    } else if (this.itemType === 'Consoles') {
      this.getList('Consoles PlayStation');
    } else if (this.itemType === 'Computer') {
      this.getList('Consoles PlayStation');
    } else if (this.itemType === 'Desktop Systems') {
      this.getList('Desktop PC');
    } else if (this.itemType === 'Laptop Systems') {
      this.getList('Laptop PC');
    } else if (this.itemType === 'PC Games') {
      this.getList('Games PC');
    } else if (this.itemType === 'PlayStation Consoles') {
      this.getList('Consoles PlayStation');
    } else if (this.itemType === 'PlayStation Games') {
      this.getList('Games PlayStation');
    } else if (this.itemType === 'Xbox Consoles') {
      this.getList('Consoles Xbox');
    } else if (this.itemType === 'Xbox Games') {
      this.getList('Games Xbox');
    }


  }

  setPaginationSize() {
    if (window.screen.width <= 400) { // 768px portrait

      this.paginationSize = 'sm';
    } else {
      this.paginationSize = '';
    }
  }
  getList(argSubcategory: string) {
    this.itemsService.getItemList(argSubcategory).subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.originalListOfItems = data;
      this.totalItems = this.originalListOfItems.length;
      // tslint:disable-next-line:max-line-length
      this.sortedListOfItems = this.originalListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  setItemsPerPage(argEvent) {
    console.log(argEvent);
    this.ItemsPerPage = argEvent;

  }
  setSearchKey(argEvent) {
    console.log('searchkey call: ' + argEvent);
    if (argEvent !== '') {
      this.SearchKeyWord = argEvent;
      this.currentlListOfItems = this.originalListOfItems.filter(data => {
        const keywordFoundInDescription = data.Description.indexOf(this.SearchKeyWord) !== -1;
        const keywordFoundInBrandName = data.Brand.indexOf(this.SearchKeyWord) !== -1;
        const keywordFoundInName = data.Name.indexOf(this.SearchKeyWord) !== -1;
        const keywordFoundInFeatures = data.Features.indexOf(this.SearchKeyWord) !== -1;
        if (keywordFoundInDescription || keywordFoundInBrandName || keywordFoundInName || keywordFoundInFeatures) {
          return data;
        }
      });
      this.pageNumber = 1;
      this.totalItems = this.currentlListOfItems.length;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);

    }
  }
  setSortOrder(argEvent) {
    console.log('Sort Order call: ' + argEvent);
    if (this.SearchKeyWord === ''){
    this.currentlListOfItems = this.originalListOfItems;
    } else {
      this.currentlListOfItems = this.currentlListOfItems;
    }
    console.log(this.currentlListOfItems.length);

    if (argEvent === 'Newest') {

      this.quickSort(this.currentlListOfItems, 0, this.currentlListOfItems.length - 1, 'Date');
      this.pageNumber = 1;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);
    } else if (argEvent === 'Rating') {

      this.quickSort(this.currentlListOfItems, 0, this.currentlListOfItems.length - 1, argEvent);
      this.currentlListOfItems.reverse();
      this.pageNumber = 1;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);
    } else if (argEvent === 'Price: Low -> High') {

      this.quickSort(this.currentlListOfItems, 0, this.currentlListOfItems.length - 1, 'Price');
      this.pageNumber = 1;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);
    } else if (argEvent === 'Price: High -> Low') {

      this.quickSort(this.currentlListOfItems, 0, this.currentlListOfItems.length - 1, 'Price');
      this.currentlListOfItems.reverse();
      this.pageNumber = 1;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);
    } else if (argEvent === 'Reviews') {

      this.quickSort(this.currentlListOfItems, 0, this.currentlListOfItems.length - 1, 'ReviewsQty');
      this.currentlListOfItems.reverse();
      this.pageNumber = 1;
      this.sortedListOfItems = this.currentlListOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);
    }

  }
  resetFilterList(argEvent) {
    console.log(argEvent);
    argEvent ? this.ngOnInit() : null;
  }

  getPage() {
    const pageNumber = (this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage;
    this.sortedListOfItems = this.currentlListOfItems.slice(pageNumber, this.ItemsPerPage * this.pageNumber);
    console.log(this.sortedListOfItems);
  }

  formatFeatures(argString) {
    const myArray = argString.split(',');
    let sortedArray = myArray.filter(data => {
      if (data.indexOf('Type') === -1 && data.indexOf('Usage') === -1 && data.indexOf('Return') === -1 && data.indexOf('Packaging') === -1) {
        return sortedArray += data + ',';
      }
    });

    return sortedArray;
  }

  swap(items, leftIndex, rightIndex) {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  partition(items, left, right, sortByKey) {
    const pivot = items[Math.floor((right + left) / 2)][sortByKey]; // middle element
    let i = left; // left pointer
    let j = right; // right pointer
    while (i <= j) {
      while (items[i][sortByKey] < pivot) {
        i++;
      }
      while (items[j][sortByKey] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(items, i, j); // sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(items: Item[], left: number, right: number, sortBykey: string) {
    let index;
    if (items.length > 1) {
      index = this.partition(items, left, right, sortBykey); // index returned from partition

      if (left < index - 1) { // more elements on the left side of the pivot
        this.quickSort(items, left, index - 1, sortBykey);
      }
      if (index < right) { // more elements on the right side of the pivot
        this.quickSort(items, index, right, sortBykey);
      }
    }
    return items;
  }




}
