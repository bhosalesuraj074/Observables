import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css'],
})
export class ErrorHandlingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  catchErrorOperator() {
    console.log('---- error handling Operator: catchError ----');
    let observable = of(1, 2, 3, 4, 0, 's');
    observable
      .pipe(
        map((value: any) => {
          return value * 2;
        }),
        catchError((error) => {
          console.log('error', error);
          return of(-1);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  retryOperator() {
    console.log('---- error handling Operator: retry ----');
  }
}

function value(this: any, value: number[], index: number): unknown {
  throw new Error('Function not implemented.');
}
