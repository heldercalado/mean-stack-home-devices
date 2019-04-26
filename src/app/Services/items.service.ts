import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseApiRoute = location.href === 'http://localhost:4200/' ? 'http://localhost:8080/api' : '/api';

  constructor(private http: HttpClient) { }

  getItemList() {
// now returns an Observable of Config

  return this.http.get(this.baseApiRoute + '/item/list');


  }


}
