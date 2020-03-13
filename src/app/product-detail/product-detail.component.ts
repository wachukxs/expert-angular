import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductObj } from '../page-one/product';
import { ProductListService } from '../product-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  obj: ProductObj;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute, private productListService: ProductListService) { }

  ngOnInit() {
    this.obj = this.productListService.getProduct(parseInt(this.route.snapshot.params.id, 10));
    console.log('the id:', this.route.snapshot.params.id);
    console.log('the obj:', this.obj);

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.obj = this.productListService.getProduct(parseInt(params.id, 10));
      console.log('the new obj id:', params.id);
      console.log('changed the obj:', this.obj);
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
