import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, from, interval } from 'rxjs';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  myForm!: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      search: new FormControl('ss', Validators.required),
    });
  }

  ngOnInit() {}

  // debounceTimeOperator
  debounceTimeOperator() {
    console.log('---- filtering Operator: debounceTime ----');
    this.myForm.get();
  }
}
