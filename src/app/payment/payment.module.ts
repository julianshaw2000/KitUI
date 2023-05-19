import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaylogComponent } from './paylog/paylog.component';
import { PaydropComponent } from './paylog/paydrop/paydrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core/core.module';
import { GetmonthyearComponent } from './paylog/getmonthyear/getmonthyear.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { GetmonthyearComponent } from '../payment/paylog/getmonthyear/getmonthyear.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PaylogComponent,
    PaydropComponent,
    GetmonthyearComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    PaymentRoutingModule,
    DragDropModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class PaymentModule { }
