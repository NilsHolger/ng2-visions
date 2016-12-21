import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductViewComponent } from './productview/productview.component';
import { CartViewComponent } from './cartview/cartview.component';
import { CheckoutViewComponent } from './checkoutview/checkoutview.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', component: ProductViewComponent},
    { path: 'cart', component: CartViewComponent},
    { path: 'checkout', component: CheckoutViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}