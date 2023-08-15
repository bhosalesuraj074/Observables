import { Component, OnInit } from '@angular/core';
import { forkJoin, from, merge } from 'rxjs';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  mergeOperator() {
    console.log('---- join Operator: merge ----');
    let obs1 = from([1, 234, 5, 34, 435]);
    let obs2 = from(['suraj', 'akash']);
    let observable = merge(obs1, obs2);
    observable.subscribe((res) => {
      console.log(res);
    });
  }
  concatOperator() {
    console.log('---- join Operator: merge ----');
    let obs1 = from([1, 234, 5, 34, 435]);
    let obs2 = from(['suraj', 'akash']);
    let observable = merge(obs1, obs2);
    observable.subscribe((res) => {
      console.log(res);
    });
  }
  forkJoinOperator() {
    console.log('---- join Operator: forkJoin ----');
    let obs1 = from([1, 234, 5, 34, 435]);
    let obs2 = from(['suraj', 'akash']);
    let observable = forkJoin(obs1, obs2);
    observable.subscribe((res) => {
      console.log(res);
    });
  }
}
