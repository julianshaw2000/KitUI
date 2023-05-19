import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Userpermit } from '../_models/userpermit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private nullPermits = <Userpermit>{
    isActive: false,
    isManager: false,
    isOwner: false,
    isSuperManager: false,
    message: 'Welcome to Carib Condominiums Portal',
  };

  permList: Userpermit[] = [
    {
      id: 1,
      username: 'admin',
      password: '1234',
      isActive: true,
      isManager: true,
      isUser: false,
      message: 'Welcome to Real Digital International Portal'
    },
    {
      id: 1,
      username: 'dave',
      password: '1234',
      isActive: true,
      isManager: false,
      isUser: true,
      message: 'Welcome to Real Digital International Portal'
    },  // manager  manager
    {
      id: 1,
      username: 'julian',
      password: '1234',
      isActive: true,
      isManager: false,
      isUser: true,
      message: 'Welcome to Real Digital International Portal'
    },  // manager  manager
  ]

  // private user = new BehaviorSubject<Userpermit>(null);
  private user = new BehaviorSubject<Userpermit>(this.nullPermits);
  castUser$ = this.user.asObservable();

  constructor(private router: Router) { }

  editUser(user: Userpermit) {
    this.user.next(user);
  }

  getUserPermit(login: string, password: string): Userpermit {
    return this.permList.find(x => x.username === login && x.password === password);
  }

  logout() {

    localStorage.setItem('login', JSON.stringify('none'));
    // this.editUser(null);
    this.editUser(this.nullPermits);

    this.router.navigate(['/user']);

  }

}
