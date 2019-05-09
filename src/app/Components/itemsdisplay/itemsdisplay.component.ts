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
  totalPages = 0;
  rotate = false;
  constructor(private comm: CommunicationService, private itemsService: ItemsService) { }

  ngOnInit() {

    this.comm.itemsPerPage.subscribe((data: EventMessage) => {

      this.ItemsPerPage = data.Value;
      if (this.itemType === 'Computer') {
        this.getComputerItems();
      }else if  (this.itemType === 'Consoles') {
        this.getXboxConsoles();
      }else if  (this.itemType === 'Computer') {
        this.getComputerItems();
      }

    });



  }
  getComputerItems() {
    this.itemsService.getComputers().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;

      // tslint:disable-next-line:radix
      this.totalPages = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });

  }
  getXboxConsoles() {
    this.itemsService.getXboxConsoles().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;

      // tslint:disable-next-line:radix
      this.totalPages = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


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
      if (data.indexOf('Type') === -1 && data.indexOf('Usage') === -1 && data.indexOf('Return') === -1) {
        return sortedArray += data + ',';
      }
    });

    return sortedArray;
  }
}
