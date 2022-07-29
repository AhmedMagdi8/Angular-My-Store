"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListItemComponent = void 0;
var core_1 = require("@angular/core");
var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.product = { name: '', price: 0, description: '', id: 0, url: '' };
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
    };
    ProductListItemComponent.prototype.onSubmit = function (product, event) {
        // get Quantity
        var index = event.target[0].options.selectedIndex;
        var newQuantity = Number(event.target[0].options[index].value);
        // get cart Products
        var cartProducts = this.httpClientService.getCartProducts();
        var prodIndexInCart = cartProducts.find(function (p) { return p.id == product.id; });
        if (cartProducts.length == 0 || !prodIndexInCart) {
            product.quantity = newQuantity;
            this.httpClientService.addToCart(product);
        }
        else {
            product.quantity = newQuantity;
            this.httpClientService.removeFromCart(product);
            this.httpClientService.addToCart(product);
        }
        alert("quantity " + newQuantity + " of " + product.name + "  added to cart with price of " + newQuantity * product.price);
    };
    __decorate([
        core_1.Input()
    ], ProductListItemComponent.prototype, "product");
    ProductListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list-item',
            templateUrl: './product-list-item.component.html',
            styleUrls: ['./product-list-item.component.css']
        })
    ], ProductListItemComponent);
    return ProductListItemComponent;
}());
exports.ProductListItemComponent = ProductListItemComponent;
