import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private ws: WebSocket;
  public chat = '';
  public status = '';

  constructor() {
  }

  ngOnInit() {
    this.ws = new WebSocket('ws://localhost:8000/ws/chat/lobby/');
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.message) {
        this.chat += data.message + '\n';
      }

      if (data.status) {
        this.status = data.status;
      }
    };
  }

  sendMessage(input) {
    this.ws.send(JSON.stringify({
      'message': input.value
    }));
    input.value = '';
  }
}
