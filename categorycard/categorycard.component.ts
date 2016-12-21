import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../category';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategoryCardComponent {
  @Input() category: Category;

  constructor(private router: Router) { }

  filterProducts(category: Category){
    this.router.navigate(['/products'], { queryParams: { category: category.id} });
  }
}
