import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './Models/product.service';
import { ProductCardComponent } from './components/ProductCardComponent/productcard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { BanenrComponent } from './components/banenr/banenr.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedComponent } from './components/featured/featured.component';


@NgModule({
  declarations: [
    AppComponent ,
    ProductCardComponent,
    ProductDetailComponent,
    HeaderComponent,
    BanenrComponent,
    FooterComponent,
    FeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
