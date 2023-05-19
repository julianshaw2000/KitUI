import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-paytable',
  templateUrl: './paytable.component.html',
  styleUrls: ['./paytable.component.scss']
})
export class PaytableComponent implements OnInit, AfterViewInit {




  displayedColumns: string[] = ['name', 'description', 'location', 'qty', 'actions'];
  // displayedColumns: string[] = ['tdate', 'name', 'amount', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// Date payment-amount reference-number
export interface PeriodicElement {
  name: string;
  description: string;
  location: string;
  qty: number;
}

//   displayedColumns: string[] = ['name', 'description' , 'location', 'qty', 'actions'];

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr1', description: 'syringe size 1', location: 'shelf 3', qty: 412 },
  { name: 'bot1', description: 'bottle size 4', location: 'shelf 4', qty: 412 },
  { name: 'bot2', description: 'bottle size 3', location: 'shelf 4', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
  { name: 'syr4', description: 'syringe size 4', location: 'shelf 3', qty: 412 },
];


/*



*/
