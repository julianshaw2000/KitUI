import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayhomeComponent } from './payhome/payhome.component';
import { PaylogComponent } from './paylog/paylog.component';
import { PayportalComponent } from './payportal/payportal.component';

const routes: Routes = [
  {
    path: '', component: PayhomeComponent
  },
  {
    path: 'paylog', component: PaylogComponent
  },
  {
    path: 'payportal', component: PayportalComponent
  },
  {
    path: 'payhome', component: PayhomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
