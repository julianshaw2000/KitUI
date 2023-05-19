import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/_service/user.service';

// import { UserService } from './core/_service/user.service';

@Component({
  selector: 'app-kitboard',
  templateUrl: './kitboard.component.html',
  styleUrls: ['./kitboard.component.scss']
})
export class KitboardComponent implements OnInit {

  userLoggedIn: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    let userLoggedIn = JSON.parse(localStorage.getItem('login'));
    console.log(this.userService);
  }

}

/*



import { Component, OnInit } from '@angular/core';
import { UserService } from './core/_service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Carib Condominiums Portal';
  userLoggedIn: boolean;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    let userLoggedIn = JSON.parse(localStorage.getItem('login'));
    console.log(this.userService);
  }


  onLogout() {
    this.userService.logout();
  }
}



*/
