import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { CondomanageComponent } from './condomanage/condomanage.component';
import { PaymentadminComponent } from './paymentadmin/paymentadmin.component';
import { QuickbooksComponent } from './quickbooks/quickbooks.component';
import { SystemadminComponent } from './systemadmin/systemadmin.component';
import { UsermanageComponent } from './usermanage/usermanage.component';

const routes: Routes = [
  {
    path: '', component: AdminconsoleComponent
  },
  {
    path: 'paymentadmin', component: PaymentadminComponent
  },
  {
    path: 'quickbooks', component: QuickbooksComponent
  },

  {
    path: 'systemadmin', component: SystemadminComponent
  },

  {
    path: 'condomanage', component: CondomanageComponent
  },

  {
    path: 'usermanage', component: UsermanageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
