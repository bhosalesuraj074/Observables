import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  arr = 1;
  constructor() {}

  ngOnInit() {}
  ofOperator() {
    console.log('---- Creation Operator: of ----');
    let observable = of(this.arr);
    observable.subscribe((res) => {
      console.log('of operator res => ', res);
    });
  }
  fromOperator() {
    console.log('---- Creation Operator: from ----');
    let fromCollection = new Promise((resolve, reject) => {
      let a = 22;
      if (a % 2 == 0) {
        resolve('resolved number -> ' + a);
      } else {
        reject('rejectd number -> ' + a);
      }
    });
    let fromObservable = from(fromCollection);
    fromObservable.subscribe(
      (res) => {
        console.log('responce =>', res);
      },
      (error) => {
        console.log('error in promise=>', error);
      },
      () => {
        console.log('stream complete');
      }
    );
  }
}
