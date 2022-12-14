"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpClientService = void 0;
var core_1 = require("@angular/core");
var HttpClientService = /** @class */ (function () {
    function HttpClientService(http) {
        this.http = http;
        this.cart = [];
    }
    HttpClientService.prototype.getProducts = function () {
        return this.http.get('http://localhost:4200/assets/data.json');
    };
    HttpClientService.prototype.getCartProducts = function () {
        return this.cart;
    };
    HttpClientService.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    HttpClientService.prototype.clearCart = function () {
        this.cart = [];
    };
    HttpClientService.prototype.removeFromCart = function (product) {
        this.cart = this.cart.filter(function (p) {
            return p.id != product.id;
        });
    };
    HttpClientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpClientService);
    return HttpClientService;
}());
exports.HttpClientService = HttpClientService;
