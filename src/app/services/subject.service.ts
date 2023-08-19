import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectService {
  constructor() {
    // this.userName.next('Suraj');
  }

  userName = new BehaviorSubject<string>('suraj');
}
