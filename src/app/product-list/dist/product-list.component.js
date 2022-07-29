"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.productMax = 10;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = this.httpClientService.getProducts();
    };
    ProductListComponent.prototype.onSubmit = function (product, event) {
        // get Quantity
        var index = event.target[0].options.selectedIndex;
        var quantity = Number(event.target[0].options[index].value);
        // get cart Products
        var cartProducts = this.httpClientService.getCartProducts();
        var prodIndexInCart = cartProducts.find(function (p) { return p.id == product.id; });
        if (cartProducts.length == 0 || !prodIndexInCart) {
            product.quantity = quantity;
            this.httpClientService.addToCart(product);
        }
        else {
            var oldQuantity = Number(prodIndexInCart.quantity);
            var newQuantity = oldQuantity + quantity;
            product.quantity = newQuantity;
            this.httpClientService.removeFromCart(product);
            this.httpClientService.addToCart(product);
        }
        alert("product added to cart");
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
