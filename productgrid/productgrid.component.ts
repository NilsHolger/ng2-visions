import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

import { ProductService } from '../product.service';
import { CartService } from '../cartmenu/cart.service';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductGridComponent {
      products: any = [];

      constructor(private activatedRouter: ActivatedRoute, 
      private productService: ProductService, private cartService: CartService) {
        this.activatedRouter.queryParams.subscribe(params => {
              let category: string = params['category'];
              let search: string = params['search'];
              //return filtered data from getproducts function
              let products: Product[] = this.productService.getProducts(category, search);
              //transform products to appropriate data to display
              this.products = this.transform(products);
              //this.products = getProducts(category, serach);
        });
      }
      transform(source: Product[]){
        let index = 0;
        let length = source.length;
        let products = [];
        while(length){
          let row: Product[] = [];
          if (length >= 3) {
            for(let i = 0; i < 3; i++){
              row.push(source[index++]);
            }
            products.push(row);
            length -= 3;
          } else {
            for (; length > 0; length--){
              row.push(source[index++]);
            }
            products.push(row);
          }
        }
        return products;
      }
      addToCart(product: Product){
        this.cartService.addProduct(product);
      }
}
