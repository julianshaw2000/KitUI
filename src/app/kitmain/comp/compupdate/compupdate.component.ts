import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comp } from '../../_models/comp';
import { CompsService } from '../../_service/comps.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compupdate',
  templateUrl: './compupdate.component.html',
  styleUrls: ['./compupdate.component.scss']
})
export class CompupdateComponent implements OnInit {

  compForm: Comp = {
    compId: 0,
    compName: '',
    compCode: '',
    currentQty: 0,
    dateAdded: undefined
  };

  recordId: number = 0;

  constructor(
    private compService: CompsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      this.recordId = Number(param.get('id'));
      this.getById(this.recordId);
    });
  }


  getById(id: number) {
    this.compService.getById(id).subscribe((data) => {
      this.compForm = data;
    });
  }

  update() {
    this.compService.update(this.recordId, this.compForm).subscribe(() => {
      this.location.back();
    });
  }


  cancel() {
    this.location.back();
  }


}
