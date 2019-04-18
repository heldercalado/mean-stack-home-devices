import { Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mean-stack-home-devices';
  displayAlert = true;
  isNavbarCollapsed=true

  close() {
    this.displayAlert = false;
  }
}
