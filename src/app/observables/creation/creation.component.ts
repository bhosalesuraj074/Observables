import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  arr = [1, 2, 3, 345];
  constructor() {}

  ngOnInit() {}
  ofOperator() {
    console.log('---- Creation Operator: of ----');
    let observable = of(this.arr);
    observable.subscribe((res) => {
      console.log('of operator res =>', res);
    });
  }
}
