import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { ProductFilterPipe } from './page-one/product-filter.pipe';
import { StarComponent } from './star/star.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AProductComponent } from './a-product/a-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

import { StoreModule } from '@ngrx/store';
import { formReducer } from './page-one/store/form.reducer';

const appRoutes: Routes = [
  { path: 'home', component: PageOneComponent },
  { path: '', component: PageTwoComponent },
  { path: 'product',
    /* canActivate: [LoginService], */
    canActivateChild: [LoginService],
    component: AProductComponent,
    children: [
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: EditProductComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    ProductFilterPipe,
    StarComponent,
    PageTwoComponent,
    ProductDetailComponent,
    EditProductComponent,
    AProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({form: formReducer})
  ],
  providers: [AuthService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
