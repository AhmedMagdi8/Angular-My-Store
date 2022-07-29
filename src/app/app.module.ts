import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
