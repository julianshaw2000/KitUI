import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comp } from '../../_models/comp';
import { CompsService } from '../../_service/comps.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compadd',
  templateUrl: './compadd.component.html',
  styleUrls: ['./compadd.component.scss']
})
export class CompaddComponent implements OnInit {


  compForm: Comp = {
    id: 0,
    name: '',
    code: '',
    currentQty: 0,
    dateAdded: new Date(),
    customer: '',
    lowLimit: 0
  };

  constructor(
    private compService: CompsService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  create() {
    this.compService.create(this.compForm).subscribe(() => {
      // this.router.navigate(['/']);
      this.location.back();
    });
  }

  cancel() {
    this.location.back();
  }

}
