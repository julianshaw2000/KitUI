import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {


  private user = new BehaviorSubject<string>('none');
  castUser = this.user.asObservable();

  editUser(user: string) {
    this.user.next(user);
  }

  constructor() { }

}
