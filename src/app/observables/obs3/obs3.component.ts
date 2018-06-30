import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-obs3',
  templateUrl: './obs3.component.html',
  styleUrls: ['./obs3.component.css']
})
export class Obs3Component implements OnInit {
    private obs = new Subject();
    public obs$ = this.obs.asObservable();
    private value_1 = 1;

  constructor() {
    this.obs$.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

  clickButton() {
    this.obs.next(this.value_1++);
  }
}
