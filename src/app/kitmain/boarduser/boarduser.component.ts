import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TemplatesService } from '../_service/templates.service';

// import * as _ from "lodash";
import { Template } from '../_models/template';
import { KitsService } from '../_service/kits.service';


interface ItemRec {
  id: number;
  name: string;
  count: number;
}

@Component({
  selector: 'app-boarduser',
  templateUrl: './boarduser.component.html',
  styleUrls: ['./boarduser.component.css']
})
export class BoarduserComponent implements OnInit {

  execType: string;
  seasons: string[] = ['Add', 'Remove'];

  result: any[] = [];

  ItemResult: ItemRec[] = [ ] 
  ItemBasket: ItemRec[] = []
 // ItemInit: ItemRec[] = []


  // result=''




  itemsInit: any[] = []

  items: any[] = []
  basket: any[] = []

  constructor(
    private templatesService: TemplatesService,
    private kitsService: KitsService
    ) { }

  runPreview() {

    this.kitsService.makeKits(this.basket)

    this.result=[]
  }

  initComps() {

    this.templatesService.get().subscribe((data) => {
     // console.log(data)

      this.itemsInit = data;

      this.itemsInit.forEach(x => x.count = 1);
      this.items = this.itemsInit

    });
  }




  drop(event: CdkDragDrop<Template[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  //================================================================================================

  // check the basket array parameters before running the function


  runIt0() {
    let data = this.basket // this is the basket array
 

   

    // this.result = data
  }
 







  //================================================================================================

  runIt() {
 
     this.result = this.basket;
     console.log(this.basket)

  }

  runIt_test() { 
 

  }





  filterText: string = '';

  ngOnInit() {
    this.initComps();
    this.filterItems();
  }

  filterItems() {
    this.items = this.itemsInit;
    this.items = this.items.filter(item => item.name.toUpperCase().includes(this.filterText.toUpperCase()));
  }

  emptyBasket() {
    this.basket = [];
  }

  runkits() {
    console.log('run kits');
  }
}

