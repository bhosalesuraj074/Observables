import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  constructor(private utility: UtilityService) {}
  user: string | undefined;
  ngOnInit() {
    this.utility.userName.subscribe((res) => {
      this.user = res;
    });
  }
  changeUser(user2: any) {
    this.utility.changeUser(user2.value);
  }
}
