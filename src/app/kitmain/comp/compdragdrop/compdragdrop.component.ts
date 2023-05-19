import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


interface Item {
  id: number;
  name: string;
  count: number;
}



@Component({
  selector: 'app-compdragdrop',
  templateUrl: './compdragdrop.component.html',
  styleUrls: ['./compdragdrop.component.css']
})
export class CompdragdropComponent implements OnInit {





  itemsInit: Item[] = [
    { id: 0, name: 'Syringe 5ml', count: 1 },
    { id: 1, name: 'Syringe 10ml', count: 1 },
    { id: 2, name: 'Soap bar', count: 1 },
    { id: 3, name: 'Flyer ULIZ', count: 1 },
    { id: 3, name: 'Tesla 3', count: 1 },
    { id: 3, name: 'Ford Cortina Lotus', count: 1 },
    { id: 3, name: 'Ford Escort Mexico', count: 1 },
    { id: 3, name: 'Vauxhall Carlton', count: 1 },
    { id: 3, name: 'Triumpth TR6', count: 1 },
    { id: 3, name: 'Triumpth Toledo', count: 1 },
  ]

  items: Item[] = []
  basket: Item[] = []

  // items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  // basket = ['Oranges', 'Bananas', 'Cucumbers'];

  drop(event: CdkDragDrop<Item[]>) {
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


