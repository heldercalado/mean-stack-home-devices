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
  title = 'mean-stack-home-devices';

  pageName = '';
  constructor(
    private comm: CommunicationService
  ) {
    this.comm.emitChange.subscribe(
      text => {
        setTimeout(() => {
          this.pageName = text;
        }, 1);

      });
  }
  
}
