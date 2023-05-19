import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/_service/user.service';
// import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  setValue() { }

  onLogin() {
    if (this.username) {
      let temp = this.userService.getUserPermit(this.username, this.password);

      if (temp) {
        localStorage.setItem('login', JSON.stringify(temp));

        this.userService.editUser(temp);

        this.router.navigate(['/kitmain']);
        // if (temp.isManager) { this.router.navigate(['/admin']); }
        // else { this.router.navigate(['/user']); }

      }
    }
  }

  onCancel() {
    this.router.navigate(['/user']);
  }

  //   onSubmit() {
  //     // TODO: Use EventEmitter with form value

  //     if (this.profileForm.valid) {
  //       console.warn('is valid')
  //       this.openSnackBar('You are logged in', 'Carib Portal')

  //       let username = this.profileForm.value.username

  //       if (username) {
  //         localStorage.setItem("login", JSON.stringify(username));
  //         this.currentuser.editUser(username);
  //         this.router.navigate(['/dashboard']);
  //       }
  //     }
  // }
}
