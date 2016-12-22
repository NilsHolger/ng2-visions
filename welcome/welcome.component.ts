import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
import { Category} from '../category';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit  {

    //slide category
    slideCategories: Category[];
    //card category
    cardCategories: Category[];

    constructor(private categoryService: CategoryService){}

    ngOnInit(): void {
      this.categoryService.getCategories().then((categories: Category[]) => {
        this.cardCategories = categories;
        this.slideCategories = [
          categories[0],
          categories[1],
          categories[2]
        ];
      });
    }

      // slideCategories: Category[] = [this.categoryService.getCategory('1'), 
      // this.categoryService.getCategory('2'), this.categoryService.getCategory('3')];
      // cardCategories: Category[] = this.categoryService.getCategories();

      selectCategory(category: Category){
        console.log('selected category ' + category.title);
      }

}
