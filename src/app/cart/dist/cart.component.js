"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
var core_1 = require("@angular/core");
var CartComponent = /** @class */ (function () {
    function CartComponent(httpClientService, route) {
        this.httpClientService = httpClientService;
        this.route = route;
        this.products = [];
        this.cartProds = [];
        this.total = 0;
        this.name = '';
        this.address = '';
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cartProds = this.httpClientService.getCartProducts();
        this.calcTotal();
    };
    CartComponent.prototype.handleChange = function (product, event) {
        var index = event.target.options.selectedIndex;
        var newQuantity = event.target.options[index].value;
        var prodInCart = this.cartProds.find(function (p) { return p.id == product.id; });
        if (this.cartProds.length == 0 || !prodInCart) {
            product.quantity = newQuantity;
            this.httpClientService.addToCart(product);
        }
        else {
            product.quantity = newQuantity;
            this.httpClientService.removeFromCart(product);
            this.httpClientService.addToCart(product);
            this.calcTotal();
        }
    };
    CartComponent.prototype.checkout = function (userData) {
        var name = userData.split('-')[0];
        var address = userData.split('-')[1];
        this.httpClientService.clearCart();
        this.route.navigateByUrl("success/" + name + "/" + address + "/" + this.total);
    };
    CartComponent.prototype.removeFromCart = function (product) {
        this.httpClientService.removeFromCart(product);
        this.cartProds = this.httpClientService.getCartProducts();
        alert("quantity " + product.quantity + " of " + product.name + "  removed from cart");
    };
    CartComponent.prototype.calcTotal = function () {
        this.total = this.cartProds.reduce(function (accumlator, val) {
            return accumlator + val.price * Number(val.quantity);
        }, 0);
        this.total = Number(this.total.toFixed(2));
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
