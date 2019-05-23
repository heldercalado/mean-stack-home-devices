import { Component, OnInit } from '@angular/core';
import { UsermessagesService } from '../../Services/usermessages.service';
import { Message } from '../../Interfaces/messages';


@Component({
  selector: 'app-usermessages',
  templateUrl: './usermessages.component.html',
  styleUrls: ['./usermessages.component.css']
})
export class UsermessagesComponent implements OnInit {
  messages: Message[];
  currentMessage: Message;
  currentMessageSet = false;
  messagesSelected = false;
  selectedMessages = [];
  allMessagesSelected = false;
  constructor(private msgservice: UsermessagesService) { }

  ngOnInit() {
    this.allMessagesSelected = false;
    console.log("all msg selected:" + this.allMessagesSelected);
    this.messages = this.msgservice.getMessages();
    this.loadCheckboxValues();
  }
  loadCheckboxValues() {
    this.selectedMessages = [];
    const counter = this.messages.length;
    for (let index = 0; index < counter; index++) {
      const element = this.messages[index];
      const myObject = {
        messageId: element.Id,
        selected: false

      };
      this.selectedMessages.push(myObject);


    }
    console.log(this.selectedMessages);
  }
  displayMessage(argMessage) {

    this.currentMessage = this.messages[argMessage];
    this.messages[argMessage].Read = true;
    this.currentMessageSet = true;

  }
  hideMessage() {

    this.currentMessageSet = false;
    this.currentMessage = null;
  }
  getSelectedMessage(argValue) {



    this.selectedMessages[argValue].selected = !this.selectedMessages[argValue].selected;


    this.checkIfMessagesSelected();

  }
  selectAllMessages() {
    this.allMessagesSelected = !this.allMessagesSelected;
    console.log("all msg selected:" + this.allMessagesSelected);
    this.selectedMessages.map((data, index) => {
      if (this.allMessagesSelected) {
        this.selectedMessages[index].selected = true;

      } else {
        this.selectedMessages[index].selected = false;

      }

    });
    this.checkIfMessagesSelected();
  }

  checkIfMessagesSelected() {
    this.messagesSelected = false;
    this.selectedMessages.map((data, index) => {
      if (this.selectedMessages[index].selected) {

        this.messagesSelected = true;

      }
    });

  }
  deleteMessages() {

    const tempArray = this.messages.filter((data, index) => {
      if (this.selectedMessages[index].selected === false) {
        return data;
      }

    });

    this.messages = tempArray;
    this.loadCheckboxValues();
    this.checkIfMessagesSelected();
    this.hideMessage();
    this.allMessagesSelected = false;
  }

}
