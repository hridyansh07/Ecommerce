import { Component, Input, OnInit } from "@angular/core";
import { Product } from 'src/app/Models/product.model';

@Component({
    selector:"app-productCard",
    templateUrl:"./productcard.component.html",
    styleUrls:["./productcard.component.css"]
})
export class ProductCardComponent implements OnInit
{
@Input() product : Product; 
    
    ngOnInit()
    {}
}