import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import { ProductService } from './Models/product.service';
import { Product } from './Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  productsListSub : Subscription;
  productsList : Product[];

  constructor(private productService : ProductService) {
  }

  ngOnInit() {}
  

  ngOnDestroy() { }
}