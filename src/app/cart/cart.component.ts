import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../services/http-client.service';
import { Product } from '../models/product-Model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products: Product[]= [];
    cartProds: any[] = [];
    total: number = 0;
  
    constructor(private httpClientService: HttpClientService, private route: Router) { }

    ngOnInit(): void {
      this.cartProds = this.httpClientService.getCartProducts();
      this.calcTotal();
    }

    handleChange(product:any, event: any) {

    }

    removeFromCart(product: number) {
        this.httpClientService.removeFromCart(product);
        this.cartProds = this.httpClientService.getCartProducts();
    }
    calcTotal(): void{
        this.total = this.cartProds.reduce((accumlator: number, val: any) =>{
          return accumlator + val.price * Number(val.quantity);
        }, 0);
        this.total = Number(this.total.toFixed(2));
    }


}
