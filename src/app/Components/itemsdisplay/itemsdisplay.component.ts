import { Component, OnInit, Input} from '@angular/core';
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
      if (this.itemType === 'Computer') {
        this.getComputerItems();
      } else if (this.itemType === 'Consoles') {
        this.getXboxConsoles();
      } else if (this.itemType === 'Computer') {
        this.getComputerItems();
      } else if (this.itemType === 'Desktop Systems') {
        this.getDesktopList();
      } else if (this.itemType === 'PC Games') {
        this.getPcGameList();
      } else if (this.itemType === 'PlayStation Consoles') {
        this.getPlayStationConsolesList();
      } else if (this.itemType === 'PlayStation Games') {
        this.getPlayStationGamesList();
      } else if (this.itemType === 'Xbox Consoles') {
        this.getXboxConsolesList();
      } else if (this.itemType === 'Xbox Games') {
        this.getXboxGamesList();
      }

    });



  }

  setPaginationSize() {
    if (window.screen.width <= 400) { // 768px portrait

      this.paginationSize = 'sm';
    } else {
      this.paginationSize = '';
    }
  }
  getXboxGamesList() {
    this.itemsService.getXboxGamesList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  
  getXboxConsolesList() {
    this.itemsService.getXboxConsolesList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  getPlayStationGamesList() {
    this.itemsService.getPlaystationGamesList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  
  getPlayStationConsolesList() {
    this.itemsService.getPlaystationConsolesList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  getDesktopList() {
    this.itemsService.getDesktopList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  }
  getPcGameList() {
    this.itemsService.getPcGameList().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;
      this.totalItems = data.length;
      this.sortedListOfItems = data.slice((this.pageNumber * this.ItemsPerPage) - this.ItemsPerPage, this.ItemsPerPage);


    });
  };
  getComputerItems() {
    this.itemsService.getComputers().subscribe((data: Item[]) => {
      data.map(info => {
        info.FilteredFeatures = this.formatFeatures(info.Features);
      });
      this.listOfItems = data;

      // tslint:disable-next-line:radix
      this.totalItems = data.length;
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
      this.totalItems = data.length;
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
      if (data.indexOf('Type') === -1 && data.indexOf('Usage') === -1 && data.indexOf('Return') === -1 && data.indexOf('Packaging') === -1) {
        return sortedArray += data + ',';
      }
    });

    return sortedArray;
  }
}
