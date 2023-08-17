import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  userName = new Subject<string>();
  constructor() {
    this.userName.next('suraj');
  }
}
