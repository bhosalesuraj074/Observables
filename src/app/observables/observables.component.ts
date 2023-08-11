import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit() {}

  // creation operator : of operator

  ngOnDestroy(): void {}

  callOf() {
    this.router.navigateByUrl('creation');
  }
}
