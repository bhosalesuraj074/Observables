import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, mapTo, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css'],
})
export class TransformationComponent implements OnInit {
  constructor() {}
  arr = [1, 2, 3, 4, 5, 6];
  ngOnInit() {}

  mapOperator() {
    console.log('---- transformation Operator: map ----');
    console.log('Actual element', this.arr);
    let observable = from(this.arr);
    observable.pipe(map((value) => value * 2)).subscribe((res) => {
      console.log(res);
    });
  }
  mapToOperator() {
    console.log('---- transformation Operator: mapTo ----');
    let observable = from([11, 324, 2, 39, 34, 235]);
    observable.pipe(mapTo(`helle ji`)).subscribe((res) => {
      console.log(res);
    });
  }
  mergeMapOperator() {
    console.log('---- transformation Operator: mergeMap ----');
    let observable1 = from([11, 324, 2, 39, 34, 235]);
    let observable2 = from(['suraj', 'akash', 'shubham']);
  }
}
