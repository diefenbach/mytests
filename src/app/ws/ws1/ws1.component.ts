import { Observable, Subject, Subscription, interval } from 'rxjs';
import { WsService } from './../ws.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ws1',
  templateUrl: './ws1.component.html',
  styleUrls: ['./ws1.component.css']
})
export class Ws1Component implements OnInit {

  private socket: Subject<any>;
  private counterSubscription: Subscription;
  public message: string;
  public sentMessage: string;

  constructor(wsService: WsService) {
    this.socket = wsService.createWebsocket();
  }
  ngOnInit() {
    this.socket.subscribe(message => (this.message = message.data));
  }
  private launchCounter() {
    // Counter already initialized
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(num => {
      this.sentMessage = 'Websocket Message ' + num;
      this.socket.next(this.sentMessage);
    });
  }
}
