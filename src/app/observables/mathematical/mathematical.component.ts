import { Component, OnInit } from '@angular/core';
import { count, from, max, min } from 'rxjs';

@Component({
  selector: 'app-mathematical',
  templateUrl: './mathematical.component.html',
  styleUrls: ['./mathematical.component.css'],
})
export class MathematicalComponent implements OnInit {
  constructor() {}
  arr = [234, 543, 5, 34, 6, 3457, 467];
  ngOnInit() {}
  countOperator() {
    console.log('---- mathematical Operator: count ----');
    let observable = from(this.arr);
    observable.pipe(max()).subscribe((res) => {
      console.log(res);
    });
  }
}
