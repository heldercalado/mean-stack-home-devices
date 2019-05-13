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

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
    console.log(this.currentWindowWidth);
    this.setPaginationSize();
    this.comm.itemsPerPage.subscribe((data: EventMessage) => {
      this.pageNumber = 1;
      this.ItemsPerPage = data.Value;


    });
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
      this.listOfItems = this.quickSortTwo(data, 'Price:Low');
      this.totalItems = data.length;
      this.sortedListOfItems = this.listOfItems.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }


  getPage() {

    console.log(this.pageNumber);
    let number = (this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage;
    console.log(number);
    console.log(this.ItemsPerPage);
    console.log(this.listOfItems.length);
    this.sortedListOfItems = this.listOfItems.slice(number, this.ItemsPerPage * this.pageNumber);
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
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)].Price; // middle element
    let i = left; // left pointer
    let j = right; // right pointer
    while (i <= j) {
      while (items[i].Price < pivot) {
        i++;
      }
      while (items[j].Price > pivot) {
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

  quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = this.partition(items, left, right); // index returned from partition

      if (left < index - 1) { // more elements on the left side of the pivot
        this.quickSort(items, left, index - 1);
      }
      if (index < right) { // more elements on the right side of the pivot
        this.quickSort(items, index, right);
      }
    }
    return items;
  }

  quickSortTwo(arr: Item[], sortBy = "Newest") {

    //  if the array is less than or equal to 1 element return the array
    if (arr.length <= 1) {

      return arr;
    }
    //  set the pivot index number , value , and move all other items excluding the pivot to a variable called rest
    // to pick the pivot we will get the mid item of the array 
    // tslint:disable-next-line:radix
    const pivotIndex = Math.floor((arr.length - 0) / 2);

    const pivotValue = arr[pivotIndex];

    const rest = arr.slice(0, pivotIndex).concat(arr.slice((pivotIndex + 1), arr.length));
    //  initialize two empty arrays leftArr and rightArr 
    // left array will hold all the items lower than the pivot value
    // right will contain the items greater than the pivot value
    const leftArr = [];
    const rightArr = [];

    // loop through the items to shift them to the array left or right  
    rest.map((element: Item) => {
      if (sortBy === 'Newest') {
        element.DateAdded < pivotValue.DateAdded ? leftArr.push(element) : rightArr.push(element);
      } else if ((sortBy === 'Price:Low')) {
        element.Price < pivotValue.Price ? leftArr.push(element) : rightArr.push(element);
      } else if ((sortBy === 'Price:High')) {
        element.Price > pivotValue.Price ? leftArr.push(element) : rightArr.push(element);
      }
    });

    // call itself to recursively re arrange all items in the array the at the end when both sides are sorted concatenate all 3 sections 
    // left + pivot + right and return the sorted array at the end
    return this.quickSortTwo(leftArr).concat(pivotValue).concat(this.quickSortTwo(rightArr));

  }


}
