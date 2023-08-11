import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  myObj: Observable<string> | undefined;

  constructor() {}

  ngOnInit() {
    this.myObj = new Observable((obserever) => {
      obserever.next('Suraj');
      obserever.next('Akash');
      // this may breake the streaming the data
      // .'. obserever.error('hello');

      obserever.next('Shubham');

      obserever.complete();
    });

    // Subscribing the obervables
    this.myObj.subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log('Error => ', error);
      },
      () => {
        console.log('Stream is complete');
      }
    );
  }


  ngOnDestroy(): void {
   
    }
}
