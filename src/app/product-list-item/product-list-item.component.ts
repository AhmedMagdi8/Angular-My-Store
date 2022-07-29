import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product-Model';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
    @Input() product:Product;


  constructor(private httpClientService: HttpClientService) {
    this.product={name:'',price:0, description:'',id:0,url:''}
   }

  ngOnInit(): void {
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
