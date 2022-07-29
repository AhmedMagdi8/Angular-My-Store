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
  
    name:String='';
    address:String='';
    constructor(private httpClientService: HttpClientService, private route: Router) { }

    ngOnInit(): void {
      this.cartProds = this.httpClientService.getCartProducts();
      this.calcTotal();
    }

    handleChange(product:any, event: any) {
        const index = event.target.options.selectedIndex;
        const newQuantity = event.target.options[index].value;

        const prodInCart = this.cartProds.find(p => p.id == product.id);
    
        if(this.cartProds.length == 0 || !prodInCart) {
            product.quantity = newQuantity;
            this.httpClientService.addToCart(product);
        } else {
            product.quantity = newQuantity;
            this.httpClientService.removeFromCart(product);        
            this.httpClientService.addToCart(product);
            this.calcTotal();
        }
    }

    checkout(userData: any) {
        let name = userData.split('-')[0];
        let address = userData.split('-')[1];
        this.httpClientService.clearCart();

        this.route.navigateByUrl(`success/${name}/${address}/${this.total}`);

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
