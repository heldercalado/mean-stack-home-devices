import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Interfaces/messages';
@Injectable({
  providedIn: 'root'
})
export class UsermessagesService {
  messages: Message[];
  constructor(private http: HttpClient) {
  }

  getMessages() {
    const now = new Date();
    this.messages = [
      {
        From: 'system',
        Header: 'Thank you for your Order 1',
        Body: 'Body Message item 001',
        Id: 1,
        Date: now,
        Read: false,
      },
      {
        From: 'system',
        Header: 'Thank you for your Order 2',
        Body: 'Body Message item 002',
        Id: 2,
        Date: now,
        Read: false,
      },
      {
        From: 'system',
        Header: 'Thank you for your Order 3',
        Body: 'Body Message item 003',
        Id: 3,
        Date: now,
        Read: false,
      },
      {
        From: 'system',
        Header: 'Thank you for your Order 4',
        Body: 'Body Message item 004',
        Id: 4,
        Date: now,
        Read: false,
      },
      {
        From: 'system',
        Header: 'Thank you for your Order 5',
        Body: 'Body Message item 005',
        Id: 5,
        Date: now,
        Read: false,
      },
    ];
    console.log(this.messages);
    return this.messages;
  }

}
