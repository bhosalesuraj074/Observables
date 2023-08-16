import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SubjectService {
  username = new Subject<string>();
  constructor() {}
}
