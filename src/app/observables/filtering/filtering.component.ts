import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  myFrom!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.myFrom = new FormGroup({
      search: new FormControl(),
    });
  }

  // debounceTimeOperator
  debounceTimeOperator(value: string) {
    let observable = of(value);
    observable.pipe(debounceTime(10000)).subscribe((res) => {
      console.log(value);
    });

    this.myFrom.get('search');
  }
}
