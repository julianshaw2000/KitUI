import { Component, OnInit } from '@angular/core';
import { UserService } from './core/_service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Carib Condominiums Portal';
  userLoggedIn: any;
  username: string;
  // userLoggedIn: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userLoggedIn = JSON.parse(localStorage.getItem('login'));
    this.username = this.userLoggedIn.username;
    // console.log(this.userLoggedIn);
    // console.log(this.userService);
  }


  onLogout() {
    this.userService.logout();
  }
}
