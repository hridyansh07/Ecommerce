import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ExamsApiService} from './models/exams.service';
import {Exam} from './models/exams.model';
import { ProductService } from './Models/product.service';
import { Product } from './Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  examsListSubs: Subscription;
  examsList: Exam[];
  productsListSub : Subscription;
  productsList : Product[];

  constructor(private examsApi: ExamsApiService, private productService : ProductService) {
  }

  ngOnInit() {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
      );
      this.productsListSub = this.productService.getProducts().subscribe(res => {
        this.productsList = res;
      }, console.error);
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
    this.productsListSub.unsubscribe();
  }
}