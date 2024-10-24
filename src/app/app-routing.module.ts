import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin/admin.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductUpdateComponent } from './features/product/product-update/product-update.component';
import { RegisterPageComponent } from './features/auth/register-page/register-page.component';
import { LoginPageComponent } from './features/auth/login-page/login-page.component';
import { HomepageComponent } from './features/index/homepage/homepage.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/create', component: ProductCreateComponent },
      { path: 'products/update/:id', component: ProductUpdateComponent },
    ],
    canActivate:[AdminGuard]
  },
  {
    path:'register',component:RegisterPageComponent
  },
  {
    path:'login', component:LoginPageComponent
  },
  {
    path:'',component:HomepageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
