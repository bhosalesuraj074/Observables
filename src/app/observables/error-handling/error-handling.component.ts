import { Component, OnInit } from '@angular/core';
import { finalize, of, throwError } from 'rxjs';
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
    let observable = of(1, 2, 3, 4, 0);
    observable
      .pipe(
        map((value: any) => {
          if (value === 0) {
            return throwError('not allowed');
          }
          return value * 2;
        }),
        catchError((error) => {
          console.log('error', error);
          return of(-1);
        }),
        finalize(() => {
          console.log('excuted');
        })
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log('hello', error);
        },
        () => {
          console.log('completed');
        }
      );
  }

  retryOperator() {
    console.log('---- error handling Operator: retry ----');
  }
}
