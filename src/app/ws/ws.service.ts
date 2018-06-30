import { Injectable } from '@angular/core';
import { Observer, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor() { }

  public createWebsocket(): Subject<MessageEvent> {
    const socket = new WebSocket('ws://localhost:12345');
    const observable = new Observable(
      obs => {
        socket.onmessage = obs.next.bind(obs);
        socket.onerror = obs.error.bind(obs);
        socket.onclose = obs.complete.bind(obs);
        return socket.close.bind(socket);
      }
    );
    const observer = {
      next: (data: Object) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }
}
