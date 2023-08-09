import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  data: any;
  ngOnInit() {}
  fetchData() {
    this.data = 'Fetching data...';
    let res = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => (this.data = JSON.stringify(res)))
        .catch((res) => (this.data = 'failed to load data try again'));
    }, 3000);
    console.log('hello ji');
    return res;
  }
}
