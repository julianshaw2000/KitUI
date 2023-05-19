import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { JobsComponent } from './job/jobs.component';
import { CompComponent } from './comp/comp.component';
import { CompaddComponent } from './comp/compadd/compadd.component';
import { CompupdateComponent } from './comp/compupdate/compupdate.component';
import { JobComponent } from './job/job.component';
import { JobaddComponent } from './job/jobadd/jobadd.component';
import { JobupdateComponent } from './job/jobupdate/jobupdate.component';
import { KitComponent } from './kit/kit.component';
import { KitaddComponent } from './kit/kitadd/kitadd.component';
import { KitupdateComponent } from './kit/kitupdate/kitupdate.component';
import { KitboardComponent } from './kitboard.component';
import { TemplateComponent } from './template/template.component';
import { TemplateaddComponent } from './template/templateadd/templateadd.component';
import { TemplateupdateComponent } from './template/templateupdate/templateupdate.component';

const routes: Routes = [
  {
    path: '', component: KitboardComponent
  },
  {
    path: 'comps', component: CompComponent
  },

  {
    path: 'kitboard', component: KitboardComponent
  },

  {
    path: 'template', component: TemplateComponent   
  },

  {
    path: 'kit', component: KitComponent
  },

  {
    path: 'jobs', component: JobComponent
  },





  {
    path: 'app-kitadd', component: KitaddComponent
  },
  {
    // path: 'comps/:id', component: CompupdateComponent
    path: 'app-kitupdate', component: KitupdateComponent
  },
  {
    // path: 'comps/:id', component: CompupdateComponent
    path: 'app-kitupdate/:id', component: KitupdateComponent
  },





  

  {
    path: 'app-compadd', component: CompaddComponent
  },
  {
    // path: 'comps/:id', component: CompupdateComponent
    path: 'app-compupdate', component: CompupdateComponent
  },
  {
    // path: 'comps/:id', component: CompupdateComponent
    path: 'app-compupdate/:id', component: CompupdateComponent
  },







  {
    path: 'app-jobadd', component: JobaddComponent
  },
  {
    // path: 'jobs/:id', component: JobupdateComponent
    path: 'app-jobupdate', component: JobupdateComponent
  },
  {
    // path: 'jobs/:id', component: JobupdateComponent
    path: 'app-jobupdate/:id', component: JobupdateComponent
  },






  {
    path: 'app-templateadd', component: TemplateaddComponent
  },
  {
    // path: 'jobs/:id', component: JobupdateComponent
    path: 'app-templateupdate', component: TemplateupdateComponent
  },
  {
    // path: 'jobs/:id', component: JobupdateComponent
    path: 'app-templateupdate/:id', component: TemplateupdateComponent
  },






  {
    path: 'job', component: JobComponent
  },
  {
    path: 'kit', component: KitComponent
  },
  {
    path: 'template', component: TemplateComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitmainRoutingModule { }


/*
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


*/
