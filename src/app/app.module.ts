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

const appRoutes: Routes = [
  { path: 'home', component: PageOneComponent },
  { path: '', component: PageTwoComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'product/:id/edit', component: EditProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    ProductFilterPipe,
    StarComponent,
    PageTwoComponent,
    ProductDetailComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
