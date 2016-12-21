import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../Product';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductSearchComponent {

  disabled: boolean = true;

  constructor(private router: Router) { }

  searchProduct(value: string){
      this.router.navigate(['/products'], { queryParams: { search: value} });
  }

  searchChanged(value: string){
    //update disabled property depends on value
    if (value){
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
}
