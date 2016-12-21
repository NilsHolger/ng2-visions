import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Cart, CartItem } from '../cart';

import { ProductService } from '../product.service';

@Injectable()
export class CartService {
    products: Product[] = [];
    cart: Cart = new Cart();

    constructor(private productService: ProductService){
        this.products = this.productService.getProducts();
    }

    addProduct(product: Product){
        //find cartitem in items
        let item: CartItem = this.findItem(product.id);
        //check was it found?
        if (item){
            //item was found.
            //increase count of same products
            item.count++;
            //increase amount of same products
            item.amount += product.price;
        } else {
            //item was not found
            //create cart item
            item = {
                product: product,
                count: 1,
                amount: product.price
            };
            //add item to items
            this.cart.items.push(item);
        }
        //increase count in cart
        this.cart.count++;
        //increase amount in the cart
        this.cart.amount += product.price;
        return item;
    }

    findItem(id: string): CartItem {
        for (let i = 0; i < this.cart.items.length; i++ ){
                if (this.cart.items[i].product.id === id){
                    return this.cart.items[i];
                }
        }
        return null;
    }
    private remove(item: CartItem): void {
       //find index of cart item
       let indx: number = this.cart.items.indexOf(item);
       //check if item found
       if (indx !== -1){
           //remove element from array
           this.cart.items.splice(indx, 1);
       } 
    }
    removeItem(item: CartItem): void{
        //delete item from items
        this.remove(item);
        //decrease count in cart
        this.cart.count -= item.count;
        //decrease amount in cart
        this.cart.amount -= item.amount;
    }

    removeProduct(product: Product){
        //find cartitem in items
        let item: CartItem = this.findItem(product.id);
        //check is item found
        if (item){
            //decrease count
            item.count--;
            //check was last product
            if (!item.count){
                //was last product delete item from items
                this.removeItem(item);
            }
            //decrease count in cart
            this.cart.count--;
            //decrease amount in cart
            this.cart.amount -= product.price;
            return item;
        } 

    }
}