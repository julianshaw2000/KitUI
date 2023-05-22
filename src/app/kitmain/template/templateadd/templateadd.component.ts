import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from '../../_models/template';
import { TemplatesService } from '../../_service/templates.service';
import { Location } from '@angular/common';
import { TemplatedragdropComponent } from '../templatedragdrop/templatedragdrop.component';
import { CompsService } from '../../_service/comps.service';
import { Comp } from '../../_models/comp';

@Component({
  selector: 'app-templateadd',
  templateUrl: './templateadd.component.html',
  styleUrls: ['./templateadd.component.css']
})
export class TemplateaddComponent implements OnInit, AfterViewInit {
  @ViewChild(TemplatedragdropComponent) childComponent: TemplatedragdropComponent;

  parentData = [];
  isFormValid: boolean = false;


  templateForm: Template = {
    id: 0,
    name: '',
    compcount: [],
    dateAdded: '',
    code: '',
    lowLimit: null,
  };

  constructor(
    private templateService: TemplatesService,
    private compService: CompsService,
    private router: Router,
    private location: Location,
  ) { }

  checkFormValidity() {
    console.log('changed')
    this.isFormValid =
      this.templateForm.code.trim().length > 0
      && this.templateForm.name.trim().length > 0
      && this.templateForm.lowLimit > 0
  }


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

  handleBasketChange(basket: Comp[]) {
    // Handle the updated basket data received from the child component
    console.log('Updated basket:', basket);
  }


  onChildEvent(event: any) {
    console.log(event);
  }
  create() {
    let basket = this.parentData = this.childComponent.basket;

    console.log("template >>", this.templateForm)
    console.log("basket >>", basket)

    //  this.templateService.create(this.templateForm, basket)
    // .subscribe(
    //   response => {
    //     // Handle the successful creation of the template
    //     console.log('Template created:', response);
    //   },
    //   error => {
    //     // Handle any errors that occurred during the creation process
    //     console.error('Error creating template:', error);
    //   }
    // );

    this.location.back();

  }

  cancel() {
    this.location.back();
  }

  test() {
    this.parentData = this.childComponent.basket;
    console.log(this.parentData);
  }

}
