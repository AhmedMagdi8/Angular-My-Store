import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-Model';

import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productMax: Number = 10;
    products: Product[] = [];

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    
    this.products = this.httpClientService.getProducts();
  }

  onSubmit(product:any, event:any) {

    // get Quantity
    const index = event.target[0].options.selectedIndex;
    const quantity = Number(event.target[0].options[index].value);
    
    // get cart Products
    let cartProducts: any[] = this.httpClientService.getCartProducts();
    
    const prodIndexInCart = cartProducts.find(p => p.id == product.id);
    
    if(cartProducts.length == 0 || !prodIndexInCart) {
        product.quantity = quantity;
        this.httpClientService.addToCart(product);
    } else {
        const oldQuantity = Number(prodIndexInCart.quantity);
        const newQuantity = oldQuantity + quantity;
        product.quantity = newQuantity;
        this.httpClientService.removeFromCart(product);        
        this.httpClientService.addToCart(product);
    }
    alert("product added to cart");
  }

}
