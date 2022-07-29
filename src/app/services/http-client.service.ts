import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product-Model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

    cart : any[] = [];

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');

  }


  getCartProducts() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
  }
  clearCart():void {
    this.cart = [];
  }

  removeFromCart(product: any) {
    
    this.cart = this.cart.filter(p => {
        return p.id != product.id
    });
  } 

}
