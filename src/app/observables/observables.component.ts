import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  constructor() {}
  numberArr = [14, 9, 8, 15, 3, 67];
  ngOnInit() {}
}
