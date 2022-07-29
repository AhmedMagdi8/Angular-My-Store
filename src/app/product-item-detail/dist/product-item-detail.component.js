"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductItemDetailComponent = void 0;
var core_1 = require("@angular/core");
var ProductItemDetailComponent = /** @class */ (function () {
    function ProductItemDetailComponent(router, route, httpClientService) {
        this.router = router;
        this.route = route;
        this.httpClientService = httpClientService;
        this.productId = null;
        this.products = [];
    }
    ProductItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getProducts().subscribe(function (products) {
            _this.productId = Number(_this.route.snapshot.paramMap.get('id'));
            _this.products = products;
            _this.product = _this.getProductById(_this.productId);
        });
    };
    ProductItemDetailComponent.prototype.getProductById = function (id) {
        var product = this.products.find(function (p) { return p.id === id; });
        return product;
    };
    ProductItemDetailComponent.prototype.onSubmit = function (product, event) {
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
        alert("product added to cart");
    };
    ProductItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-item-detail',
            templateUrl: './product-item-detail.component.html',
            styleUrls: ['./product-item-detail.component.css']
        })
    ], ProductItemDetailComponent);
    return ProductItemDetailComponent;
}());
exports.ProductItemDetailComponent = ProductItemDetailComponent;
