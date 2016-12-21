import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Product } from '../Product';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductSearchComponent implements OnInit {

  disabled: boolean = true;
  searchControl: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    this.searchControl.valueChanges.subscribe((value: string) => {
      this.searchChanged(value);
    });
  }

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
