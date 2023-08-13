import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, from, interval } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  myForm!: FormGroup;
  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      search: new FormControl('jajd'),
    });
  }

  // debounceTimeOperator
  debounceTimeOperator() {
    console.log('---- filtering Operator: debounceTime ----');
    let observable = interval(100);
    observable.pipe(debounceTime(100)).subscribe((res) => {
      console.log(res);
    });
  }
}
