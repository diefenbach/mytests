import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const button = document.querySelector('button');
    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      scan(count => count + 1, 0),
    )
    .subscribe(count => console.log(count));
  }
}
