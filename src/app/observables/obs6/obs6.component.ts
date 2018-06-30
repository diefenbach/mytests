import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obs6',
  templateUrl: './obs6.component.html',
  styleUrls: ['./obs6.component.css']
})
export class Obs6Component implements OnInit {
  private socket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:12345');
    this.socket.onmessage = function(e) {
      console.log(e.data);
    };
  }

  ngOnInit() {
  }

}
