import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/_service/user.service';
// import { UserService } from '../_service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imagSource = 'assets/realdigital.jpg';
  showMenu = false;
  user: string | undefined;

  constructor(
    public userService: UserService,

  ) { }

  ngOnInit(): void {


  }

}
