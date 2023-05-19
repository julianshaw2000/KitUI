
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Template } from '../../_models/template';
import { TemplatesService } from '../../_service/templates.service';
import { Location } from '@angular/common';
import { TemplatedragdropComponent } from '../templatedragdrop/templatedragdrop.component';
import { CompsService } from '../../_service/comps.service';

@Component({
  selector: 'app-templateupdate',
  templateUrl: './templateupdate.component.html',
  styleUrls: ['./templateupdate.component.css']
})
 
  export class TemplateupdateComponent implements OnInit {
    @ViewChild(TemplatedragdropComponent) childComponent: TemplatedragdropComponent;
  
    parentData = [];
  


  templateForm: Template = {
    id: 0,
    name: '',
    kitCode: '',
    dateAdded: '',
    compcount: []
  };

  constructor(
    private templateService: TemplatesService,
    private compService: CompsService,
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
    this.templateService.getById(id).subscribe((data) => {
      this.templateForm = data;
    });
  }
  
  create() {
    let basket = this.parentData = this.childComponent.basket;

    // this.templateService.create(this.templateForm, basket).subscribe(() => {
    // this.location.back();
  // });
}

  update() {
    this.templateService.update(this.templateForm).subscribe(() => {
      this.location.back();
    });
  }


  cancel() {
    this.location.back();
  }


}
