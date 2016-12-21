import { Component } from '@angular/core';

import { CategoryService } from '../category.service';
import { Category} from '../category';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {

    constructor(private categoryService: CategoryService){}

      slideCategories: Category[] = [this.categoryService.getCategory('1'), 
      this.categoryService.getCategory('2'), this.categoryService.getCategory('3')];
      cardCategories: Category[] = this.categoryService.getCategories();

      selectCategory(category: Category){
        console.log('selected category ' + category.title);
      }

}
