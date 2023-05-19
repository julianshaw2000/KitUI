import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  },

  {
    path: 'job', loadChildren: () => import('./kitmain/kitmain.module').then(m => m.KitmainModule)
  },

  {
    path: 'kitmain', loadChildren: () => import('./kitmain/kitmain.module').then(m => m.KitmainModule)
  },

  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '', redirectTo: 'user', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
