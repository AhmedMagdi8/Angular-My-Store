"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDataComponent = void 0;
var core_1 = require("@angular/core");
var UserDataComponent = /** @class */ (function () {
    function UserDataComponent() {
        this.checkout = new core_1.EventEmitter();
        this.name = '';
        this.address = '';
        this.nameError = 'name must be at least 5';
        this.addressError = 'address must be at least 8';
    }
    UserDataComponent.prototype.validateName = function () {
        if (this.name.length >= 5) {
            this.nameError = '';
        }
        else {
            this.nameError = 'name must be at least 5 characters';
        }
    };
    UserDataComponent.prototype.validateAddress = function () {
        if (this.address.length >= 8) {
            this.addressError = '';
        }
        else {
            this.addressError = 'address must be at least 8 characters';
        }
    };
    UserDataComponent.prototype.ngOnInit = function () {
    };
    UserDataComponent.prototype.onSubmit = function () {
        this.checkout.emit(this.name + '-' + this.address);
    };
    __decorate([
        core_1.Output()
    ], UserDataComponent.prototype, "checkout");
    UserDataComponent = __decorate([
        core_1.Component({
            selector: 'app-user-data',
            templateUrl: './user-data.component.html',
            styleUrls: ['./user-data.component.css']
        })
    ], UserDataComponent);
    return UserDataComponent;
}());
exports.UserDataComponent = UserDataComponent;
