import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kit } from '../../_models/kit';
import { KitsService } from '../../_service/kits.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kitupdate',
  templateUrl: './kitupdate.component.html',
  styleUrls: ['./kitupdate.component.scss']
})
export class KitupdateComponent implements OnInit {

  kitForm: Kit = {
    id: 0,
    code: '',
    currentQty: 0,
    dateAdded: undefined,
    name: '',
    compcount: [],
    templateCode: '',
    customer: ''
  };


  constructor(
    private kitService: KitsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }


  getById(id: number) {
    this.kitService.getById(id).subscribe((data) => {
      this.kitForm = data;
    });
  }

  update() {
    this.kitService.update(this.kitForm).subscribe(() => {
      this.location.back();
    });
  }


  cancel() {
    this.location.back();
  }


}
