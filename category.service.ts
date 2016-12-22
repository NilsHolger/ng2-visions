import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Category} from './category';


@Injectable()
export class CategoryService {

            //url to categories web api
            private categoriesUrl = 'app/categories';
            //we keep categories in cache variable
            private categories: Category[] = [];

            constructor(private http: Http){}

            getCategories(): Promise<Category[]> {
              return this.http.get(this.categoriesUrl)
                          .toPromise()
                          .then((response: Response) => {
                            this.categories = response.json().data as Category[];
                            return this.categories;
                          })
                          .catch(this.handleError);
            }

            getCategory(id: string): Category {
                  for (let i = 0; i < this.categories.length; i++){
                    if (this.categories[i].id === id){
                      return this.categories[i];
                    }
                  }
                  return null;
            }

            private handleError(error: any): Promise<any> {
              window.alert(`An error occured: ${error}`);
              return Promise.reject(error.message || error);
            }





  // categories: Category[] = [
  //   {
  //     id: '1',
  //     title: 'Knowledge: read internet, github, books',
  //     imageL: '../assets/images/knowledge1a.jpg',
  //     subTitle: 'Spaceships',
  //     imageS: '../assets/images/spaceship1.jpg',
  //     desc:
  //         `The best spaceships: Victory-class, Firefly-class, cruisers, destroyers, frigates, corvettes, dreadnoughts and many more ...`
  //   },
  //   {
  //     id: '2',
  //     title: 'Knowledge: read code, alot of code',
  //     imageL: '../assets/images/knowledge1a.jpg',
  //     subTitle: 'Knowledge',
  //     imageS: '../assets/images/knowledge2.jpg',
  //     desc:
  //         `The ultimate knowledge: JavaScript, HTML5, CSS3, C++, Linux, Angular, Android and much more ...`
  //   },
  //   {
  //     id: '3',
  //     title: 'Knowledge: write code, alot of code',
  //     imageL: '../assets/images/knowledge1a.jpg',
  //     subTitle: 'Teleportation',
  //     imageS: '../assets/images/teleportation1.jpg',
  //     desc:
  //         `Teleportation techniques: matter, energy, space, quantum mechanics and many more ...`
  //   }
  // ];

  // getCategories() { return this.categories; }

  // getCategory(id: string): Category {
  //   for (let i = 0; i < this.categories.length; i++) {
  //     if (this.categories[i].id === id) {
  //       return this.categories[i];
  //     }
  //   }
  //   throw new CategoryNotFoundException(`Category ${id} not found`);
  // }
}
class CategoryNotFoundException extends Error {
  constructor(message?: string) { super(message); }
}