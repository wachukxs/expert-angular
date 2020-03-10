import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

import { ProductObj } from './product';
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


productArr: Array <ProductObj> = [{
    productId: 1,
    productName: 'Leaf Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2019',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 3.2,
    imageUrl: 'assets/images/leaf_rake.png'
  },
  {
    productId: 2,
    productName: 'Garden Cart',
    productCode: 'GDN-0023',
    releaseDate: 'March 18, 2019',
    description: '15 gallon capacity rolling garden cart',
    price: 32.99,
    starRating: 4.2,
    imageUrl: 'assets/images/garden_cart.png'
  },
  {
    productId: 5,
    productName: 'Hammer',
    productCode: 'TBX-0048',
    releaseDate: 'May 21, 2019',
    description: 'Curved claw steel hammer',
    price: 8.9,
    starRating: 4.8,
    imageUrl: 'assets/images/hammer.png'
  }];

  @Input()
  listFilter: string = 'cart'; // usr's last entered filter

  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('sth changed', changes);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
    console.log('new value', message);
  }

}
