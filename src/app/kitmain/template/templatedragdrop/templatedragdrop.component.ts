import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Comp } from '../../_models/comp';
import { CompsService } from '../../_service/comps.service';
import { TemplatesService } from '../../_service/templates.service';


// interface Item {
//   id: number;
//   name: string;
//   count: number;
// }



@Component({
  selector: 'app-templatedragdrop',
  templateUrl: './templatedragdrop.component.html',
  styleUrls: ['./templatedragdrop.component.css']
})
export class TemplatedragdropComponent implements OnInit {
  @Input() childData: Comp[];
  // @Output() childEvent = new EventEmitter();


  //

  itemsInit: Comp[] //= this.childData;

  items: Comp[] = []
  basket: Comp[] = []

  constructor(
    private templateService: TemplatesService,
    private compService: CompsService,
  ) { }
  // emitEvent() {
  //   this.childEvent.emit(this.basket);
  // }


  drop(event: CdkDragDrop<Comp[]>) {
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





  filterText: string = '';

  ngOnInit() {

    this.itemsInit = this.childData;
    console.log('data >>', this.itemsInit);

    this.filterItems();
    this.initComps();

  }


  // compId: number;
  // compName: string;
  // compCode: string;
  // currentQty: number;
  // dateAdded: Date;

  initComps() {

    this.compService.get().subscribe((data) => {
      console.log(data)

      this.itemsInit = data;

      this.itemsInit = this.itemsInit.map(item => {
        item.currentQty = 1
        return item;
      });

      this.items = this.itemsInit

    });
  }

  filterItems() {
    this.items = this.itemsInit;
    this.items = this.items.filter(item => item.compName.toUpperCase().includes(this.filterText.toUpperCase()));
  }

  emptyBasket() {
    this.basket = [];
  }

  runkits() {
    console.log('run kits');
  }

}


