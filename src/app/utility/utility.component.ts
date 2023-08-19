import { Component, OnInit } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'],
})
export class UtilityComponent implements OnInit {
  constructor(private _utitlityService: UtilityService) {}
  username!: string;
  ngOnInit() {
    this._utitlityService.userName.subscribe((res) => {
      this.username = res;
    });
  }
}
