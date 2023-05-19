import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from '../../_models/template';
import { TemplatesService } from '../../_service/templates.service';
import { Location } from '@angular/common';
import { TemplatedragdropComponent } from '../templatedragdrop/templatedragdrop.component';
import { CompsService } from '../../_service/comps.service';

@Component({
  selector: 'app-templateadd',
  templateUrl: './templateadd.component.html',
  styleUrls: ['./templateadd.component.css']
})
export class TemplateaddComponent implements OnInit, AfterViewInit {
  @ViewChild(TemplatedragdropComponent) childComponent: TemplatedragdropComponent;

  parentData = [];


  templateForm: Template = {
    id: 0,
    name: '',
    compcount: [],
    dateAdded: '',
    kitCode: ''
  };

  constructor(
    private templateService: TemplatesService,
    private compService: CompsService,
    private router: Router,
    private location: Location,
  ) { }

  ngAfterViewInit(): void {

    // this.compService.get().subscribe((data) => {
    //   console.log(data)
    //   this.parentData = data;
    // });

  }

  init(): void {

    // this.compService.get().subscribe((data) => {
    //   console.log(data)
    //   this.parentData = data;
    // });

  }

  ngOnInit(): void {
    // this.compService.get().subscribe((data) => {
    //   console.log(data)
    //   this.parentData = data;
    // });
  }


  onChildEvent(event: any) {
    console.log(event);
  }
  create() {
    let basket = this.parentData = this.childComponent.basket;

    console.log("basket >>", basket)

    //  this.templateService.create(this.templateForm, basket).subscribe(() => {
    //   this.location.back();
    // });

  }

  cancel() {
    this.location.back();
  }

  test() {
    this.parentData = this.childComponent.basket;
    console.log(this.parentData);
  }

}
