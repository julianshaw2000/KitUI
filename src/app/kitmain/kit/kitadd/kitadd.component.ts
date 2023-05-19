import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kit } from '../../_models/kit';
import { KitsService } from '../../_service/kits.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kitadd',
  templateUrl: './kitadd.component.html',
  styleUrls: ['./kitadd.component.scss']
})
export class KitaddComponent implements OnInit {


  kitForm: Kit = {
    id: 0,
    kitCode: '',
    currentQty: 0,
    dateAdded: undefined,
    name: '',
    compcount: []
  };

  constructor(
    private kitService: KitsService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  create() {
    this.kitService.create(this.kitForm).subscribe(() => {
      // this.router.navigate(['/']);
      this.location.back();
    });
  }

  cancel() {
    this.location.back();
  }

}
