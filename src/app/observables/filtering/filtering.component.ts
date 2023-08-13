import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  myForm!: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit() {}

  // debounceTimeOperator
  debounceTimeOperator() {
    this.myForm.controls['search'].valueChanges
      .pipe(debounceTime(3000), take(2))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
