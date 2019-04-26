import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseApiRoute = '';

  constructor(private http: HttpClient) { }

  getConfig() {


    location.href === 'http://localhost:4200/' ? this.baseApiRoute = 'http://localhost:8080/api' : this.baseApiRoute = '/api';
    // now returns an Observable of Config

    return this.http.get(this.baseApiRoute);


  }


}
