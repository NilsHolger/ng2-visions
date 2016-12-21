import { Component, Input } from '@angular/core';
import { CartService } from '../cartmenu/cart.service';
import { Cart, CartItem } from '../cart';


@Component({
    selector: 'app-cartview',
    templateUrl: './cartview.component.html',
    styles: ['./cartview.component.css']
})
export class CartViewComponent {

    private cart: Cart;

    constructor(private cartService: CartService){
        this.cart = this.cartService.cart;
    }

    clearCart() {
        this.cartService.clearCart();
    }

    update(value, item: CartItem){
        let result = value - item.count;
            if (result > 0){
                for (let i = 0; i < result; i++){
                    this.cartService.addProduct(item.product);
                }
            } else if (result < 0) {
                for (let i = 0; i < -result; i++){
                    this.cartService.removeProduct(item.product);
                }
            }
            return value;
    }
}