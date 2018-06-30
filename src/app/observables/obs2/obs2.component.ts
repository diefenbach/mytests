import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs2',
  templateUrl: './obs2.component.html',
  styleUrls: ['./obs2.component.css']
})
export class Obs2Component implements OnInit {
  public data: Observable<number>;
  public values: Array<number> = [];
  private anyErrors: boolean;
  public finished: boolean;

  constructor() { }

  ngOnInit() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43);
          }, 2000);

          setTimeout(() => {
              observer.complete();
          }, 3000);
      });

      const subscription = this.data.subscribe(
          value => this.values.push(value),
          error => this.anyErrors = true,
          () => this.finished = true
      );
  }
}
