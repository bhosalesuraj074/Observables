import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  arr = [1, 2, 3, 345];
  constructor() {}

  ngOnInit() {}

  // creation operator : of operator
  ofOperator() {
    console.log('---- Creation Operator: of ----');
    let observable = of(this.arr);
    observable.subscribe((res) => {
      console.log('of operator res =>', res);
    });
  }

  ngOnDestroy(): void {}
}
