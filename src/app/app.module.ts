import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent,
    SuccessComponent,
    UserDataComponent,
    ProductListItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
