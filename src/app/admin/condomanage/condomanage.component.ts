import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserSelect } from './_models/UserSelect';




@Component({
  selector: 'app-condomanage',
  templateUrl: './condomanage.component.html',
  styleUrls: ['./condomanage.component.scss']
})
export class CondomanageComponent implements OnInit {



  condoData2 = [

    {
      id: 1,
      name: 'Anthony Shaw',
      condoId: "211",
      address: 'Main Street',
      country: 'Barbados',
      phone: '123-456-7890',
      email: 'anthony@gmail.com',
      status: 'Active',


    },
    {
      id: 2,
      name: 'Julian Shaw',
      condoId: "211",
      address: 'Main Street',
      country: 'Dubai',
      phone: '123-456-7890',
      email: 'julian@gmail.com',
      status: 'Active',
    },


    {
      id: 1,
      name: 'Anthony Shaw',
      condoId: "212",
      address: 'Main Street',
      country: 'Barbados',
      phone: '123-456-7890',
      email: 'anthony@gmail.com',
      status: 'Active',


    },
    {
      id: 2,
      name: 'Julian Shaw',
      condoId: "212",
      address: 'Main Street',
      country: 'Dubai',
      phone: '123-456-7890',
      email: 'julian@gmail.com',
      status: 'Active',
    },

    {
      id: 3,
      condoId: "308",
      name: 'Denise Howard',
      address: 'Main Street',
      country: 'Barbados',
      phone: '123-456-7890',
      email: 'denise@gmail.com',
      status: 'Active',

    },

    {
      id: 6,
      condoId: "308",
      name: 'Linword Howard',
      address: 'Main Street',
      country: 'Barbados',
      phone: '123-456-7890',
      email: 'linwood@gmail.com',
      status: 'Active',

    },


    {
      id: 4,
      condoId: "201",
      name: 'Mitzy',
      address: 'Main Street',
      country: 'Miami',
      phone: '123-456-7890',
      email: 'mitzy@gmail.com',
      status: 'Active',

    },

  ]


  condoList = Array<UserSelect>();


  private condoUsers = new BehaviorSubject<UserSelect[]>(this.condoList);
  condoUsers$ = this.condoUsers.asObservable();

  amountMaint = 300

  amountCess = 300



  constructor() { }

  ngOnInit(): void {
  }

  addItem(condoId) {

    let tcondo = []

    console.log('from man ', condoId)

    let condoList = this.condoData2.filter(condo => condo.condoId == condoId)

    console.log('from list ', condoList)


    this.condoUsers.next(condoList); // this will make sure to tell every subscriber about the change.

  }
}
