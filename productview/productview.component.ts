import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { CartService } from '../cartmenu/cart.service';
import { Product } from '../product';
import { Cart, CartItem } from '../cart';
 

@Component({
    selector: 'app-productview',
    templateUrl: './productview.component.html',
    styles: ['./productview.component.css']
})
export class ProductViewComponent {
        product: Product;
        cartItem: CartItem;

        get quantity(): number {
            return this.cartItem ? this.cartItem.count : 0;
        }

        get amount(): number {
            return this.cartItem ? this.cartItem.amount : 0;
        }


    constructor(private route: ActivatedRoute, private cartService: CartService,
                private productService: ProductService){
                        this.route
                        .params
                        .subscribe(params => {
                            //get product id
                            let id: string = params['id'];
                            //return product from product service
                            this.product = this.productService.getProduct(id);
                            //return cart item
                            this.cartItem = this.cartService.findItem(id);
                        });
    }

    addToCart() {
        this.cartItem = this.cartService.addProduct(this.product);
    }

    removeFromCart() {
        this.cartItem = this.cartService.removeProduct(this.product);
    }

}