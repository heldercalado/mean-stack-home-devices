import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {



  constructor(private http: HttpClient) { }
  baseApiRoute = location.href.indexOf('http://localhost:4200/') !== -1 ? 'http://localhost:8080/api' : '/api';



  getXboxGamesList() {

    return this.http.get(this.baseApiRoute + '/xboxgames/');

  }


  getXboxConsolesList() {

    return this.http.get(this.baseApiRoute + '/xboxconsoles/');

  }





  getPlaystationGamesList() {

    return this.http.get(this.baseApiRoute + '/playstationgames/');

  }


  getPlaystationConsolesList() {

    return this.http.get(this.baseApiRoute + '/playstationconsoles/');

  }

  getDesktopList() {

    return this.http.get(this.baseApiRoute + '/desktopsystems/');

  }
  getPcGameList() {

    return this.http.get(this.baseApiRoute + '/computergames/');

  }
  getComputers() {


    return this.http.get(this.baseApiRoute + '/computers/');


  }

  getXboxConsoles() {


    return this.http.get(this.baseApiRoute + '/xboxconsoles/');


  }


}
