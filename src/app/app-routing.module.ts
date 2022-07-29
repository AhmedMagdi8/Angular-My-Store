import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
    { path:'', component: ProductListComponent },
    { path:'cart', component: CartComponent},
    { path: 'product-detail/:id', component: ProductItemDetailComponent},
    { path: 'success/:name/:address/:total', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
