import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paylog',
  templateUrl: './paylog.component.html',
  styleUrls: ['./paylog.component.scss']
})
export class PaylogComponent {

  payment = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onUpdatePayment() {

    this.payment = 1440806.24;
  }

}
