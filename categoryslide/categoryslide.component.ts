import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../category';

@Component({
  selector: 'app-categoryslide',
  templateUrl: './categoryslide.component.html',
  styleUrls: ['./categoryslide.component.css']
})
export class CategorySlideComponent {
       @Input() category: Category;
       @Output() select: EventEmitter<Category> = new EventEmitter<Category>();

       browse() {
         this.select.emit(this.category);
       }

}
