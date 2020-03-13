import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ProductObj } from './product';
import { Router } from '@angular/router';

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

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private router: Router, private productListService: ProductListService) { }

  ngOnInit() {
    console.log('ngOnInit called');
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

}
