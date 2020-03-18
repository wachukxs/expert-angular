import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ProductObj } from './product';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FormActions, EditPassword, EditUsername } from './store/form.actions';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: ['td {color: red;}'],
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit, OnChanges {

  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'PageOne Component Title';

  imageWidth: number = 45;

  productArr: Array<ProductObj>;

  @Input()
  listFilter: string; // usr's last entered filter

  showImage: boolean = false;

  morkForm: Observable< Array<string> >;

  /* @ViewChild('f', {}) theForm: NgForm; */

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private router: Router,
              private productListService: ProductListService,
              private store: Store<{form: Array<string>}>) { } // the data type of our initial state
  // or Store<{form: Array<sting> }>
  ngOnInit() {
    console.log('ngOnInit called');
    this.morkForm = this.store.select('form');

    this.productArr = this.productListService.getProducts();

    console.log('the obj', this.productListService.getProduct(2));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('sth changed', changes);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
    console.log('new value', message);
  }

  goelsewhere(id: string|number): void {
    this.router.navigate(['/id', id, 'else'], {queryParams: {canNotEdit: '894393'}, fragment: 'this'} );
  }

  onSumbit(form: NgForm) { // form: HTMLFormElement
    console.log('Submited!', form); // ain't seeing form.value.email|username
  }

  onFormChange(event: any) {
    console.log(event, 'new value:', event.target.value);

    this.store.dispatch(new EditPassword(event.target.value) );
  }

}
