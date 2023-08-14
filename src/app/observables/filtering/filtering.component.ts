import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval, takeWhile, takeLast, from, skip } from 'rxjs';
import {
  debounceTime,
  distinct,
  elementAt,
  filter,
  first,
  last,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  myForm!: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit() {}

  // debounceTimeOperator
  debounceTimeOperator() {
    //console.log('---- filtering Operator: debounceTime ----');
    this.myForm.controls['search'].valueChanges
      .pipe(debounceTime(3000))
      .subscribe((res) => {
        console.log(res);
      });
  }
  // 2. take operator
  takeOperator() {
    console.log('---- filtering Operator: take ----');
    let intervalOperator = interval(1000);
    let subscription = intervalOperator.pipe(take(2)).subscribe((res) => {
      if (res >= 5) {
        subscription.unsubscribe();
        console.log('hello ji');
      } else {
        console.log(res);
      }
    });
  }

  //3 . takeWhile operartor
  takeWhileOperator() {
    console.log('---- filtering Operator: takeWhile ----');
    let intervalOperator = interval(1000);
    intervalOperator.pipe(takeWhile((value) => value < 5)).subscribe((res) => {
      console.log(res);
    });
  }

  // 4. takeLast operator
  takeLastOperator() {
    console.log('---- filtering Operator: takeLast ----');
    let observable = from([12, 42, 345, 534, 35, 3]);
    observable.pipe(takeLast(2)).subscribe((res) => {
      console.log(res);
    });
  }

  // 5.  operator
  firstOperator() {
    console.log('---- filtering Operator: first ----');
    let observable = from([13, 23, 4, 342, 234, 233]);
    observable.pipe(first((value) => value % 2 == 0)).subscribe((res) => {
      console.log(res);
    });
  }

  // 6. takeLastOperator operator
  lastOperator() {
    console.log('---- filtering Operator: last ----');
    let observable = from([13, 23, 4, 342, 234, 234]);
    observable.pipe(last((value) => value % 2 == 0)).subscribe((res) => {
      console.log(res);
    });
  }
  //7. elementAt Operator
  elementAtOperator() {
    console.log('---- filtering Operator: elementAt ----');
    let observable = from(['suraj', 'akash', 'shubham']);
    observable.pipe(elementAt(0)).subscribe((res) => {
      console.log(res);
    });
  }

  // 8. filter Operator
  filterOperator() {
    console.log('---- filtering Operator: filter ----');
    let observable = from([23, 423, 523, 3, 34, 52, 34]);
    observable.pipe(filter((value) => value % 2 != 0)).subscribe((res) => {
      console.log(res);
    });
  }

  // 9. distinct Operator
  distinctOperator() {
    console.log('---- filtering Operator: distinct ----');
    let arr = [23, 2, 234, 4, 23, 2];
    let observable = from(arr);
    console.log('before filter', arr);
    observable.pipe(distinct()).subscribe((res) => {
      console.log(res);
    });
  }

  // 10. skip Operator
  skipOperator() {
    console.log('---- filtering Operator: skip ----');
    let arr = ['suraj', 'shubham', 'akash', 'kumar', 'Amruta'];
    let observable = from(arr);
    console.log('actual array', arr);
    observable.pipe(skip(2)).subscribe((res) => {
      console.log(res);
    });
  }
}
