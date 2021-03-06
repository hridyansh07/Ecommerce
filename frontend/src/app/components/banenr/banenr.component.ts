import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Models/product.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banenr.component.html',
  styleUrls: ['./banenr.component.css']
})
@Injectable()
export class BanenrComponent implements OnInit, OnDestroy{
public featured : Product;
public featuredSubscription : Subscription;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  // this.featuredSubscription = this.productService.getFeatured().subscribe(res => {this.featured = res});
  }
  ngOnDestroy()
  {
    // this.featuredSubscription.unsubscribe();
  }
}
