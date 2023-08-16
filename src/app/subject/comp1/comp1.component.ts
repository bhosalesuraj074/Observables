import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private subject: SubjectService) {}
  user: string = '';
  ngOnInit() {
    this.subject.userName.next('Suraj');
    console.log('hello ji');
    this.subject.userName.subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }
}
