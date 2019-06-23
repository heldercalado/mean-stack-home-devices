import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../Interfaces/User';
import { CommunicationService, EventMessage } from './communication.service';


export interface CustomResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}


@Injectable({
  providedIn: 'root'
})
export class JwtService {
  emitMessage: EventMessage = {
    Type: 'loggedIn',
    Value: true
  };
user: User;
  constructor(private httpClient: HttpClient, private comm: CommunicationService) { }
  baseApiRoute = location.href.indexOf('http://localhost:4200/') !== -1 ? 'http://localhost:8080/api/users' : '/api/users';
  login(email: string, password: string) {
    console.log('function login called');
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<CustomResponse>(this.baseApiRoute + '/login', { Email: email, PassWord: password }).pipe(tap(res => {
      this.comm.emit({Type: 'loggedIn', Value: true , Name: res.user.FirstName});
      this.user = res.user;
      localStorage.setItem('token', res.token);
    }));
  }
  register(email: string, password: string) {
    return this.httpClient.post<{ access_token: string }>(this.baseApiRoute + '/register', { email, password }).pipe(tap(res => {
      this.login(email, password);
    }));
  }
  logout() {
    localStorage.removeItem('token');
    this.comm.emit({Type: 'loggedIn', Value: false, Name: ''});
  }
  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
