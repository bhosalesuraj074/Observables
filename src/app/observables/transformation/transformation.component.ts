import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    let observable = from(this.arr);
    observable.pipe(map((value) => value * 2)).subscribe((res) => {
      console.log(res);
    });
  }

  mergeMapOperator() {
    console.log('---- transformation Operator: mergeMap ----');
  }
}
