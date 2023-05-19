import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitmainRoutingModule } from './kitmain-routing.module';
import { KitComponent } from './kit/kit.component';
import { CompComponent } from './comp/comp.component';
import { TemplateComponent } from './template/template.component';
import { JobComponent } from './job/job.component';
import { MatTableModule } from '@angular/material/table';
import { CompaddComponent } from './comp/compadd/compadd.component';
import { CompupdateComponent } from './comp/compupdate/compupdate.component';
import { CompdeleteComponent } from './comp/compdelete/compdelete.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';



import { KitaddComponent } from './kit/kitadd/kitadd.component';
import { KitupdateComponent } from './kit/kitupdate/kitupdate.component';
import { KitdeleteComponent } from './kit/kitdelete/kitdelete.component';


import { JobaddComponent } from './job/jobadd/jobadd.component';
import { JobupdateComponent } from './job/jobupdate/jobupdate.component';
import { JobdeleteComponent } from './job/jobdelete/jobdelete.component';





// import { TemplateComponent } from './template/template.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobboardComponent } from './job/jobboard/jobboard.component';
import { KitboardComponent } from './kitboard.component';

import { BoardmanagerComponent } from './boardmanager/boardmanager.component';
import { BoarduserComponent } from './boarduser/boarduser.component';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CompdragdropComponent } from './comp/compdragdrop/compdragdrop.component';
// import { TemplateComponent } from './template/template.component';

import { TemplatedragdropComponent } from './template/templatedragdrop/templatedragdrop.component';

import { TemplateaddComponent } from './template/templateadd/templateadd.component';
import { TemplateupdateComponent } from './template/templateupdate/templateupdate.component';
import { TemplatedeleteComponent } from './template/templatedelete/templatedelete.component';
import { StockkitComponent } from './stockkit/stockkit.component';
import { StockcompComponent } from './stockcomp/stockcomp.component';



@NgModule({
  declarations: [
    KitComponent,
    CompComponent,
    TemplateComponent,
    
    JobComponent,
    JobaddComponent,
    JobupdateComponent,
    JobdeleteComponent,

    KitComponent,
    KitaddComponent,
    KitupdateComponent,
    KitdeleteComponent,

    CompaddComponent,
    CompupdateComponent,
    CompdeleteComponent,
    JobboardComponent,
    KitboardComponent,

    BoardmanagerComponent,
    BoarduserComponent,
    CompdragdropComponent,
    TemplatedragdropComponent,
    TemplateaddComponent,
    TemplateupdateComponent,
    TemplatedeleteComponent,
    StockkitComponent,
    StockcompComponent

  ],
  imports: [
    CommonModule,
    KitmainRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatTabsModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,


    DragDropModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,


    // FlexLayoutModule,   <--- this screws up css flex
    MatButtonModule,
    // TemplateupdateComponent

  ]
})
export class KitmainModule { }
