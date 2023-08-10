import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  data: any;
  asyncData: any;
  ngOnInit() {}

  dell = {
    brand: 'dell',
    status: false,
    color: 'black',
  };
  hp = {
    brand: 'hp',
    status: false,
    color: 'silver',
  };
  notAvailable = {
    brand: '',
    status: 'Laptop not avilable',
  };
  promiseData() {
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
  fetchData() {
    this.data = 'Fetching data...';
    // let res = setTimeout(() => {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((res) => (this.data = JSON.stringify(res)))
    //     .catch((res) => (this.data = 'failed to load data try again'));
    // }, 3000);
    // console.log('hello ji');
    // //return res;
    setTimeout(() => {
      let a = this.promiseData();
      a.then((res) => {
        console.log('Then Data', res);
      });
      a.catch((res) => {
        console.log('catch data', res);
      });
    }, 3000);
  }

  async getAsyncData() {
    this.asyncData = 'Fatching data...';
    let res = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1001')
        .then((res) => res.json())
        .then((res) => (this.asyncData = JSON.stringify(res)))
        .catch(
          (res) =>
            (this.asyncData =
              'requested data is not available : ' + JSON.stringify(res))
        );
    }, 3000);
  }
}
