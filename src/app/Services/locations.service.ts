import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }
  baseApiRoute = location.href.indexOf('http://localhost:4200/') !== -1 ? 'http://localhost:8080/itemsapi' : '/itemsapi';

  getUSStates() {
    return this.http.get(this.baseApiRoute + '/liststates/');
  }
  getUSCities(argState) {
    return this.http.get(this.baseApiRoute + '/listcities/' + argState);
  }
}
