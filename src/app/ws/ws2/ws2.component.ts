import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws2',
  templateUrl: './ws2.component.html',
  styleUrls: ['./ws2.component.css']
})
export class Ws2Component implements OnInit {
  public webSocket: WebSocket;
  public messages: Array<string> = [];

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:12345');
    this.webSocket.onmessage = (e) => this.messages.push(e.data);
  }

  ngOnInit() {
  }

  sendMessage(input) {
    this.webSocket.send(input.value);
    input.value = '';
  }
}
