import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductListService]
})
export class AppComponent {
  title = 'good';
}
