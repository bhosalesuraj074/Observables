import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  data: any;
  asyncdata: any;
  fetchapi: any;
  ngOnInit() {}

  dell = {
    brand: 'dell',
    status: false,
    color: 'black',
  };
  hp = {
    brand: 'hp',
    status: true,
    color: 'silver',
  };
  notAvailable = {
    brand: '',
    status: 'Laptop not avilable',
  };

  promiseData() {
    console.log('Hello');
    let promise = new Promise((resolve, reject) => {
      if (this.dell.status) {
        resolve(this.dell);
      } else if (this.hp.status) {
        resolve(this.hp);
      } else {
        reject(this.notAvailable);
      }
    });
    return promise;
  }
  // 1. this for the promise operation
  asyncData() {
    this.data = 'Fetching data...';
    setTimeout(
      () =>
        this.promiseData()
          .then((res) => {
            console.log('Then Data', res);
            this.data = JSON.stringify(res);
          })
          .catch((res) => {
            console.log('catch data', res);
            this.data = JSON.stringify(res);
          }),
      3000
    );
  }

  // 2. this for the async / await operation
  async getAsyncData() {
    this.asyncdata = 'Fatching data...';
    let res = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/10')
        .then((res) => res.json())
        .then((res) => (this.asyncdata = JSON.stringify(res)))
        .catch(
          (res) =>
            (this.asyncdata =
              'requested data is not available : ' + JSON.stringify(res))
        );
    }, 3000);
  }

  // 3. by using the api fetching the external data by using Api endpoint
  fetchApiData() {
    this.fetchapi = 'fetching data...';
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => (this.fetchapi = JSON.stringify(res)))
      .catch((res) => (this.fetchapi = 'data is not available'));
  }
}
