import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminconsoleComponent } from './adminconsole/adminconsole.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { QuickbooksComponent } from './quickbooks/quickbooks.component';
import { SystemadminComponent } from './systemadmin/systemadmin.component';
import { PaymentadminComponent } from './paymentadmin/paymentadmin.component';


import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserRoutingModule } from '../user/user-routing.module';
import { CondomanageComponent } from './condomanage/condomanage.component';
import { CondolistComponent } from './condomanage/condolist.component';
import { DialogOverviewExampleDialog, EditcondoComponent } from './condomanage/editcondo/editcondo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AdminconsoleComponent,
    UsermanageComponent,
    QuickbooksComponent,
    SystemadminComponent,
    PaymentadminComponent,
    CondomanageComponent,
    CondolistComponent,
    EditcondoComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    FormsModule,
    UserRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule { }

