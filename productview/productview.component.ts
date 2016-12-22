import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Cart, CartItem} from '../cart';
import {CartService} from '../cartmenu/cart.service';
import {Product} from '../product';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styles: ['./productview.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;
  cartItem: CartItem;

  get quantity(): number { return this.cartItem ? this.cartItem.count : 0; }

  get amount(): number { return this.cartItem ? this.cartItem.amount : 0; }


  constructor(
      private activatedRoute: ActivatedRoute, private cartService: CartService,
      private productService: ProductService) {}

//http://localhost:4200/products/7
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // get product id
      let id: string = params['id'];
      // return product from product service
      this.productService.getProduct(id).then((product: Product) => this.product = product);
      this.cartItem = this.cartService.findItem(id);
    });
  }


  addToCart() { this.cartItem = this.cartService.addProduct(this.product); }

  removeFromCart() {
    this.cartItem = this.cartService.removeProduct(this.product);
  }
}