import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, from, interval } from 'rxjs';

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
      demo: new FormControl(),
    });
  }

  // debounceTimeOperator
  debounceTimeOperator() {
    console.log(this.myFrom.get('demo'));
    // this.search.valueChanges.pipe(debounceTime(100)).subscribe((res) => {
    //   console.log('---- filtering Operator: debounceTime ----');
    //   console.log(this.search.value);
    // });
  }
}
