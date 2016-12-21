import { Component, Input } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cartmenu',
    templateUrl: './cartmenu.component.html',
    styleUrls: ['./cartmenu.component.css']
})
export class CartMenuComponent {
    private cart: Cart;

    constructor(private cartService: CartService){
        this.cart = this.cartService.cart;
    }
}