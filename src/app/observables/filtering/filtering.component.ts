import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, of, takeWhile } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

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
    console.log('---- filtering Operator: debounceTime ----');
    this.myForm.controls['search'].valueChanges
      .pipe(debounceTime(3000), take(2))
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

  // takeWhile operartor
  takeWhileOperator() {
    console.log('---- filtering Operator: takeWhile ----');
    let intervalOperator = interval(1000);
    let takeWhileObservalbe = intervalOperator
      .pipe(takeWhile((value) => value < 5))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
