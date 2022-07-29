"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var cart_component_1 = require("./cart/cart.component");
var product_item_detail_component_1 = require("./product-item-detail/product-item-detail.component");
var product_list_component_1 = require("./product-list/product-list.component");
var header_component_1 = require("./header/header.component");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var success_component_1 = require("./success/success.component");
var user_data_component_1 = require("./user-data/user-data.component");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                cart_component_1.CartComponent,
                product_item_detail_component_1.ProductItemDetailComponent,
                product_list_component_1.ProductListComponent,
                header_component_1.HeaderComponent,
                success_component_1.SuccessComponent,
                user_data_component_1.UserDataComponent
            ],
            imports: [
                forms_1.ReactiveFormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                forms_2.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
