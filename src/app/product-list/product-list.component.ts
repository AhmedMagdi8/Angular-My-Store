import { Component, OnInit, Output } from '@angular/core';
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
    @Output() products:Product[] = [];

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    
    this.httpClientService.getProducts().subscribe(products => {
        this.products = products;
    });
  }



}
