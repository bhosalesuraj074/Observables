import { Component, ElementRef, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private utility: UtilityService) {}

  ngOnInit() {}
  changeUser(user1: any) {
    this.utility.changeUser(user1.value);
  }
}
