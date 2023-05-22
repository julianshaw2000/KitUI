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
  @Output() basketChanged = new EventEmitter<Comp[]>();

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
    // this.basketChanged.emit(this.basket); // Emit the updated basket data
    this.updateBasketAndQty(); // Update the basket and currentQty values

  }


  updateBasketAndQty() {
    this.basket.forEach(item => {
      const correspondingItem = this.itemsInit.find(i => i.id === item.id);
      if (correspondingItem) {
        correspondingItem.currentQty = item.currentQty;
      }
    });

    this.basketChanged.emit(this.basket); // Emit the updated basket data
  }



  filterText: string = '';

  ngOnInit() {

    this.itemsInit = this.childData;
    console.log('data >>', this.itemsInit);

    this.filterItems();
    this.initComps();

  }


  // id: number;
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
    this.items = this.items.filter(item => item.name.toUpperCase().includes(this.filterText.toUpperCase()));
  }

  runkits() {
    console.log('run kits');
  }



  emptyBasket() {
    this.items = [...this.basket, ...this.items]; // Move all items from the basket to the top of the items array
    this.basket = []; // Clear the basket
  }


  deleteItem(index: number) {
    const deletedItem = this.basket.splice(index, 1)[0]; // Remove the item from the basket and store it
    this.items.unshift(deletedItem); // Add the deleted item to the beginning of the items array
  }



}


