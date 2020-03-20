import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ProductObj } from './product';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { FormActions, EditPassword, EditUsername } from './store/form.actions';
import { IFormState } from './store/form.state';
import { selectPassword, selectUsername } from './store/form.selectors';

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

  genders = ['male', 'female'];

  productArr: Array<ProductObj>;

  @Input()
  listFilter: string; // user's last entered filter

  showImage: boolean = false;

  morkForm: Observable< Array<string> >;

  pword = this.store.pipe(select(selectPassword));

  uname = this.store.pipe(select(selectUsername));

  profileForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });

  test2 = new FormControl('');

  /* @ViewChild('f', {}) theForm: NgForm; */

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private router: Router,
              private productListService: ProductListService,
              private store: Store<IFormState>) { } // the data type of our initial state
  // or Store<{form: Array<sting> }>
  ngOnInit() {
    console.log('ngOnInit called');
    this.morkForm = this.store.select('form');

    /* this.profileForm.setValue({firstName: this.morkForm[0], lastName: this.morkForm[1]}); */

    this.productArr = this.productListService.getProducts();

    console.log('the obj', this.productListService.getProduct(2));

    console.log('it:::');
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

  onFormChangePassword(event: any) {
    console.log(event, 'new value:', event.target.value);

    this.store.dispatch(new EditPassword(event.target.value) );
  }

  onFormChangeUsername(event: any) {
    console.log(event, 'new value:', event.target.value);

    this.store.dispatch(new EditUsername(event.target.value) );
  }

}
