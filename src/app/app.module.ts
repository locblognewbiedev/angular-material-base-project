import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { UploadImageComponent } from './shared/upload-image/upload-image.component';
import { PureRichTextComponent } from './shared/pure-rich-text/pure-rich-text.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductCreateComponent } from './features/product/product-create/product-create.component';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { ProductUpdateComponent } from './features/product/product-update/product-update.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { AdminComponent } from './features/admin/admin/admin.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { RegisterFormComponent } from './features/auth/register-form/register-form.component';
import { RegisterPageComponent } from './features/auth/register-page/register-page.component';
import { LoginFormComponent } from './features/auth/login-form/login-form.component';
import { LoginPageComponent } from './features/auth/login-page/login-page.component';
import { JwtInterceptor } from './interceptors/jwt.service';
import { HomepageComponent } from './features/index/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    UploadImageComponent,
    PureRichTextComponent,
    ProductCreateComponent,
    ProductFormComponent,
    ProductUpdateComponent,
    ProductListComponent,
    AdminComponent,
    DashboardComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginFormComponent,
    LoginPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatChipsModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSliderModule,
    MatRadioModule,
    /** angular material */

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
