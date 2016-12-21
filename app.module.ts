import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule  } from '@angular/common';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { CartService } from './cartmenu/cart.service';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IFA2VDirective } from './a2v.directive';
import { CategoryCardComponent } from './categorycard/categorycard.component';
import { FooterComponent } from './footer/footer.component';
import { CategorySlideComponent } from './categoryslide/categoryslide.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './productlist/productlist.component';
import { ProductSearchComponent } from './productsearch/productsearch.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductGridComponent } from './productgrid/productgrid.component';
import { CartMenuComponent } from './cartmenu/cartmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IFA2VDirective,
    CategoryCardComponent,
    FooterComponent,
    CategorySlideComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductSearchComponent,
    CategorylistComponent,
    ProductcardComponent,
    ProductGridComponent,
    CartMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy },
  CategoryService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
