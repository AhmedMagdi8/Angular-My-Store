import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-Model';
import { Observable } from 'rxjs';

import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productMax: Number = 10;
    products:Product[] = [];

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    
    this.httpClientService.getProducts().subscribe(products => {
        this.products = products;
    });
  }

  onSubmit(product:any, event:any) {

    // get Quantity
    const index = event.target[0].options.selectedIndex;
    const newQuantity = Number(event.target[0].options[index].value);
    
    // get cart Products
    let cartProducts: any[] = this.httpClientService.getCartProducts();
    
    const prodIndexInCart = cartProducts.find(p => p.id == product.id);
    
    if(cartProducts.length == 0 || !prodIndexInCart) {
        product.quantity = newQuantity;
        this.httpClientService.addToCart(product);
    } else {
        product.quantity = newQuantity;
        this.httpClientService.removeFromCart(product);        
        this.httpClientService.addToCart(product);
    }
    alert("quantity " +newQuantity +" of "+ product.name+ "  added to cart with price of "+newQuantity*product.price);
  }

}
