import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent{

  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) {
        this.categories = categoryService.getCategories();
   }

  filterProducts(category: Category){
    this.router.navigate(['/products'], {queryParams: {category: category.id}});
  }


}
