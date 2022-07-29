import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../services/http-client.service';
import { Product } from '../models/product-Model';


@Component({
    selector: 'app-product-item-detail',
    templateUrl: './product-item-detail.component.html',
    styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

    constructor(private router: Router,private route: ActivatedRoute, private httpClientService: HttpClientService) { }

    productId: number | null = null;
    product: any;
    products: any[] = [];
    ngOnInit(): void {
        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        this.products = this.httpClientService.getProducts();
        this.product = this.getProductById(this.productId);
    }

    getProductById(id: number): Product | null {
        const product: Product | null = this.products.find(p => p.id === id);
        return product;
    }
    onSubmit(product: any, event: any) {
        console.log('jjj');
        

        // get Quantity
        const index = event.target[0].options.selectedIndex;
        const quantity = event.target[0].options[index].value;
        
        // get cart Products
        let cartProducts: any[] = this.httpClientService.getCartProducts();
        
        const prodIndexInCart = cartProducts.find(p => p.id == product.id);
        console.log('h');
        
        if (cartProducts.length == 0 || prodIndexInCart == -1) {
            product.quantity = quantity;
            this.httpClientService.addToCart(product);
            alert("product added to cart");
            
        } else {
            const oldQuantity = cartProducts[prodIndexInCart].quantity;
            const newQuantity = oldQuantity + quantity;
            product.quantity = newQuantity;
            this.httpClientService.removeFromCart(product);
            this.httpClientService.addToCart(product);
            alert("product added to cart");
        }
        
        
        this.router.navigateByUrl('/')

    }
}
