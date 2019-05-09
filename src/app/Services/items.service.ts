import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

 

  constructor(private http: HttpClient) { }
  baseApiRoute = location.href.indexOf('http://localhost:4200/') !== -1 ? 'http://localhost:8080/api' : '/api';
  getItemList() {


    return this.http.get(this.baseApiRoute + '/item/list');


  }
  getItemListbyCategory(argCategory) {


    return this.http.get(this.baseApiRoute + '/list/' + argCategory);


  }

  getComputers() {


    return this.http.get(this.baseApiRoute + '/computers/');


  }

  getXboxConsoles() {


    return this.http.get(this.baseApiRoute + '/xboxconsoles/');


  }


}
