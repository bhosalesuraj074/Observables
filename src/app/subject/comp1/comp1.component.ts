import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private subject: SubjectService) {}
  user: string = '';
  ngOnInit() {
    this.subject.username.next('suraj');
    console.log('after subscribing');
    this.subject.username.subscribe((res) => {
      this.user = res;
    });
  }
}
