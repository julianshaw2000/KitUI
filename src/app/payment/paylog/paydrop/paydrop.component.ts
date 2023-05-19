import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-paydrop',
  templateUrl: './paydrop.component.html',
  styleUrls: ['./paydrop.component.css']
})
export class PaydropComponent {

  @Output() totalpayEvent = new EventEmitter<string>();


  onclick(condoId: string) {
    console.log(condoId);
    this.totalpayEvent.emit(condoId);

  }

  todo = [
    'CESS: May-2022 [$320,100.55]',
    'Maint: May-2022 [$180,100.78]',
    'Maint: June-2022 [$180,100.78]',
    'CESS: Sept-2022 [$320,100.55]',
    'Maint: July-2022 [$180,100.78]',
    'Maint: Aug-2022 [$180,100.78]',
  ];

  done = [
  ];

  drop(event: CdkDragDrop<string[]>) {
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

  onMoveRight() {
    if (this.todo.length > 0) {
      this.todo.forEach(element => {
        this.done.push(element);
      });
      this.todo = [];

    }
  }
  onMoveLeft() {
    if (this.done.length > 0) {
      this.done.forEach(element => {
        this.todo.push(element);
      });
      this.done = [];
    }
  }

}
