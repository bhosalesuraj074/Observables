import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  // creation operator : of operator

  ngOnDestroy(): void {}

  callOf(call: string) {
    this.router.navigate([call], { relativeTo: this.route });
  }
}
