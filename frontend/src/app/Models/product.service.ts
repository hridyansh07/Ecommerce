import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from './product.model';

@Injectable()
export class ProductService 
{

    constructor(private httpClient : HttpClient){
        
    }

    getProducts () : Observable<Product[]>
    {
        return this.httpClient.get<Product[]>(`${environment.API_URL}/products`)
    }

    getProduct(productId : number) : Observable<Product>
    {
        return this.httpClient.get<Product>(`${environment.API_URL}/prodcut/${productId}`)
    }

    getFeatured() : Observable<Product>
    {
        return this.httpClient.get<Product>(`${environment.API_URL}/featured`);
    }

}
