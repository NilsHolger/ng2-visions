import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cartmenu/cart.service';
import { Cart, CartItem } from '../cart';


@Component({
    selector: 'app-checkoutview',
    templateUrl: './checkoutview.component.html',
    styles: ['./checkoutview.component.css']
})
export class CheckoutViewComponent implements OnInit {
    private cart: Cart;
    form: FormGroup;

    constructor(private cartService: CartService, private fb: FormBuilder){
        this.cart = this.cartService.cart;
    }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: []
        });
    }
    submit() {
        alert('Submitted');
        this.cartService.clearCart();
    }
}