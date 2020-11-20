import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamsApiService } from './Models/exams.service';
import { ProductService } from './Models/product.service';
import { ProductCardComponent } from './components/ProductCardComponent/productcard.component';

@NgModule({
  declarations: [
    AppComponent ,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [ExamsApiService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
