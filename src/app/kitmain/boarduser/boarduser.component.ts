import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TemplatesService } from '../_service/templates.service';
import { Template } from '../_models/template';
import { KitsService } from '../_service/kits.service';
import { CompsService } from '../_service/comps.service';
import { Comp } from '../_models/comp';

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
  execValues: string[] = ['Add', 'Remove'];
  result: any[] = [];
  ItemResult: ItemRec[] = [];
  ItemBasket: ItemRec[] = [];
  jobName: string = '';
  itemsInit: any[] = [];
  items: any[] = [];
  basket: any[] = [];
  kitCompData: { kitId: any; compId: any; kitCount: any; componentName: any; totalComponentCount: number; }[];

  constructor(
    private templatesService: TemplatesService,
    private compsService: CompsService,
    private kitsService: KitsService
  ) { }

  ngOnInit(): void {
    this.initComps();
    this.filterItems();
  }

  runPreview(): void {
    this.kitsService.makeKits(this.basket);
    this.result = [];
  }

  initComps(): void {
    this.templatesService.get().subscribe((data) => {
      this.itemsInit = data;
      this.itemsInit.forEach(x => x.count = 1);
      this.items = this.itemsInit;
    });
  }

  drop(event: CdkDragDrop<Template[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  preview(): void {
    const kits = this.basket;
    this.compsService.get().subscribe((comps) => {
      this.kitCompData = kits.map((kit: any) => {
        const comp = comps.find((c: Comp) => c.id === kit.compId);
        const totalCount = kit.count;

        return {
          kitId: kit.id,
          compId: kit.compId,
          kitCount: kit.count,
          componentName: comp.name,
          totalComponentCount: totalCount
        };
      });
    });
  }

  runIt(): void {
    this.result = this.basket;
    console.log(this.basket);
  }

  filterText: string = '';

  filterItems(): void {
    this.items = this.itemsInit;
    this.items = this.items.filter(item => item.name.toUpperCase().includes(this.filterText.toUpperCase()));
  }

  emptyBasket(): void {
    this.basket = [];
  }

  runkits(): void {
    console.log('run kits');
  }
}
