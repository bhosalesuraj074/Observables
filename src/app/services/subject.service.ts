import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectService {
  constructor() {
    this.userName.next('Suraj');
  }

  userName = new Subject<string>();
}
