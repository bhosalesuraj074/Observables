import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';

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
    let observable = of([1, 2, 3, 4]);
    observable
      .pipe(
        map((value: any) => value * 10),
        catchError((error) => {
          console.log(`error ${error}`);
          return 'error is occured';
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
