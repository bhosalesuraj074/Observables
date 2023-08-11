import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  myObj: Observable<string> | undefined;
  unSub!: Subscription;
  constructor() {}

  ngOnInit() {
    this.myObj = new Observable((obserever) => {
      obserever.next('Suraj');
      obserever.next('Akash');

      // this may breake the streaming the data
      // .'. obserever.error('hello');
      obserever.next('Shubham');

      // Stream complete
      obserever.complete();
    });

    // Subscribing the obervables
    this.unSub = this.myObj.subscribe(
      (next) => {
        console.log(next);
      },
      (error) => {
        console.log('Error => ', error);
      },
      () => {
        console.log('Stream is complete');
      }
    );
  }

  // creation operator : of operator
  ofOperator() {
    console.log('Creation Operator: of');
  }

  ngOnDestroy(): void {
    console.log('Observable Distroed');
    this.unSub.unsubscribe();
  }
}
