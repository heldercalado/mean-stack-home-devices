import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommunicationService } from './Services/communication.service';
interface Alert {
  type: string;
  message: string;
}



@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ItemsPerPage = 20;
  SortBy = '';
  SearchKeyWord = '';
  pageName = '';
  title = 'Tech 4 Less';
  userLoggedIn = false;
  userName: string;

  constructor(
    private comm: CommunicationService
  ) {
    this.comm.emitChange.subscribe(
      text => {
        setTimeout(() => {
          this.pageName = text.Value;
        }, 1);

      });
    this.comm.itemsPerPage.subscribe(
      text => {
        setTimeout(() => {
          this.ItemsPerPage = text;
        }, 1);

      });
    this.comm.sortByText.subscribe(
      text => {
        setTimeout(() => {
          this.SortBy = text;
        }, 1);

      });
    this.comm.searchKeyWordText.subscribe(
      text => {
        setTimeout(() => {
          this.SearchKeyWord = text;
        }, 1);

      });
    this.comm.isUserLoggedIn.subscribe(
      text => {
        setTimeout(() => {

          this.userLoggedIn = text.Value;
        }, 1);

      });
    this.comm.userName.subscribe(
      text => {
        setTimeout(() => {
          console.log("Name: " + text.Name);
          this.userName = text.Name;
        }, 1);

      });
  }

}
