import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp } from '../_models/comp';
import { Compcount } from '../_models/compcount';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HelperModule {
  constructor() { }

  copyCompsToCompcounts(comps: Comp[]): Compcount[] {
    return comps.map(comp => ({
      compcountId: comp.id,
      id: comp.id,
      quantity: comp.currentQty,
      templateId: 0
    }));
  }
}
