import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {

  constructor(private utility : UtilityService) {}

  ngOnInit() {}
  changeUser(user2: any) {
    this.utility.changeUser(user2.value);
  }
}
