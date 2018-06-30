import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obs7',
  templateUrl: './obs7.component.html',
  styleUrls: ['./obs7.component.css']
})
export class Obs7Component implements OnInit {
  private subject: Subject<string>;
  public messages: Array<string> = [];

  constructor() {
    this.subject = new Subject();
  }

  ngOnInit() {
    // You can simply subscribe to a subject
    this.subject.subscribe(message => this.messages.push(message));
  }

  sendMessage(input) {
    // And you can simply send a message to s subject
    this.subject.next(input.value);
    input.value = '';
  }
}
