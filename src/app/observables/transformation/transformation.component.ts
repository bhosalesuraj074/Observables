import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, of, switchMap } from 'rxjs';
import { map, mapTo, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css'],
})
export class TransformationComponent implements OnInit {
  constructor() {}
  @ViewChild('switch')
  button!: ElementRef;
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
    let observable1 = from([1, 2, 3, 4, 5, 6]);
    let observable2 = from(['suraj', 'akash', 'shubham']);
    let obs = observable1
      .pipe(
        mergeMap((value1) =>
          observable2.pipe(mergeMap((value2) => of(`${value1}${value2}`)))
        )
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  switchMapOperator() {
    const clickObs = fromEvent(this.button.nativeElement, 'click');
    clickObs.pipe(switchMap((event) => interval(1000))).subscribe((res) => {
      console.log(res);
    });
  }
}
