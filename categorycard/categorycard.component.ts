import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../category';

@Component({
  selector: 'app-categorycard',
  templateUrl: './categorycard.component.html',
  styleUrls: ['./categorycard.component.css']
})
export class CategoryCardComponent implements OnChanges {
  @Input() category: Category;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
      for (let propName in changes){
              let change = changes[propName];
              let current = JSON.stringify(change.currentValue);
              let previous = JSON.stringify(change.previousValue);
              console.log(`${propName}:currentValue = ${current}, previousValue = ${previous}`);
      }
  }

  filterProducts(category: Category){
    this.router.navigate(['/products'], { queryParams: { category: category.id} });
  }
}
