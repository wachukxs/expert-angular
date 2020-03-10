import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { ProductFilterPipe } from './page-one/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
