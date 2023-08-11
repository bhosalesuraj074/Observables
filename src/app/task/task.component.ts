import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  numberArr: number[] = [14, 9, 8, 15, 3, 67];
  constructor() {}

  ngOnInit() {
    this.addElement('');
  }

  addElement(newElement: string) {
    if (newElement != '') {
      this.numberArr.push(+newElement);
    }
    this.numberArr.sort((a, b) => {
      return a - b;
    });
    console.log(this.numberArr);
    
  }
}
