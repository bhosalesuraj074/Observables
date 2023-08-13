import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  arr = 1;
  // for the fromEvent
  @ViewChild('Mybutton')
  Mybutton!: ElementRef;
  constructor() {}

  ngOnInit() {}

  // Creation opertor
  // 1. of operator
  ofOperator() {
    console.log('---- Creation Operator: of ----');
    let observable = of(this.arr);
    observable.subscribe((res) => {
      console.log('of operator res => ', res);
    });
  }

  // 2. from operator
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

  //3 fromEvent operator
  fromEventOperator() {
    console.log('---- Creation Operator: fromEvent ----');
    let fromEventObservable = fromEvent(this.Mybutton.nativeElement, 'click');

    //by using template varibale
    fromEventObservable.subscribe(
      (next) => {
        console.log(next);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('stram completed');
      }
    );
  }

  // 4. interval operator
  intervalOperator() {
    console.log('---- Creation Operator: interval ----');
    let obs1 = of([1, 235, 345, 4, 2345, 6]);
    obs1.subscribe((obs: any) => {
      let intervalObs = interval(500);
      intervalObs.subscribe((res) => {
        console.log(obs * res);
      });
    });
  }
}
