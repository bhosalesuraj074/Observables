import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  arr = 1;
  fromCollection = ['suraj', 1, 'Shubham'];
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
    let fromObservable: Observable<string | number> = from(this.fromCollection);
    fromObservable.subscribe((res) => {
      console.log(res);
    });
  }
}
