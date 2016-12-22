import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductcardComponent {
      @Input() products: Product[];
      @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
      setClasses(product: Product){
        return {
          'card-danger': product.isSpecial,
          'card-inverse': product.isSpecial
        };
      }
      buy(product: Product){
        console.log('we are learning ' + product.title);
        this.addToCart.emit(product);
      }
}
