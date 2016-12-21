import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../Product';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductSearchComponent {

  constructor(private router: Router) { }

  searchProduct(value: string){
      this.router.navigate(['/products'], { queryParams: { search: value} });
  }
}
