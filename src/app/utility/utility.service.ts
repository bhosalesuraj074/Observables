import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilityService {
  userName = new BehaviorSubject<string>('suraj');
  constructor() {}
  changeUser(username:string){
      this.userName.next(username);
  }
}
