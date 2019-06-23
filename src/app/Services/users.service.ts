import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  baseApiRoute = location.href.indexOf('http://localhost:4200/') !== -1 ? 'http://localhost:8080/api/users' : '/api/users';



  getUserInformation() {
    const userObject = {
      FirstName: 'Helder',
      LastName: 'Calado',
      PassWord: 'Password',
      StreetAddressOne: '1234 My Street',
      StreetAddressTwo: 'Unit 12',
      State: 'California',
      City: 'San Diego',
      ZipCode: 12545,
      PhoneNumber: '9999999999',
      Email: 'myemail@myprovider.com',
    };
    return userObject;
  }

}
