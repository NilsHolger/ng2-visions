import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Product} from './product';


@Injectable()
export class ProductService {
  private productsUrl = 'app/products';
  constructor(private http: Http) {}

  getProducts(category?: string, search?: string): Promise<Product[]>{
          let url = this.productsUrl;
          if (category){
              url += `/?categoryId=${category}`;
          } else if (search) {
              url += `/?title=${search}`;
          }
          return this.http.get(url).toPromise().then((response: Response) =>
          response.json().data as Product[])
          .catch(this.handleError);
  }

  getProduct(id: string): Promise<Product>{
          return this.http
                     .get(this.productsUrl + `/${id}`)
                     .toPromise()
                     .then((response: Response) => response.json().data as
                     Product)
                     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
          window.alert(`An error occured: ${error}`);
          return Promise.reject(error.message || error);
  }


//   products:
//       Product[] =
//           [
//             {
//               id: '1',
//               categoryId: '1',
//               title: 'Corvette',
//               price: 1,
//               isSpecial: true,
//               desc:
//                   `Corvettes would be the smallest warships, designed for escort and patrol, anti-mine, or anti-stealth.  They would be used where larger ships with more firepower are not deemed necessary (such as backwater worlds or low-risk areas) or where a larger ship would be unsuitable for deployment. `,
//               imageS: '../assets/images/corevette1.jpg',
//               imageL: ''
//             },
//             {
//               id: '2',
//               categoryId: '1',
//               title: 'Frigate',
//               price: 2,
//               isSpecial: true,
//               desc:
//                   `Based on their history, space frigates would probably be best defined as smaller vessels with light armament and armor (but more powerful and larger than a corvette), suited for speed and maneuverability.`,
//               imageS: '../assets/images/frigate1.jpg',
//               imageL: '../assets/images/frigate1.jpg'
//             },
//             {
//               id: '3',
//               categoryId: '1',
//               title: 'Destroyer',
//               price: 3,
//               isSpecial: true,
//               desc:
//                   `Destroyers would be much like their naval counterparts; ships smaller than cruisers (and usually larger than frigates, though not always) but armed to the teeth with a multitude of weapons.`,
//               imageS: '../assets/images/destroyer1.jpg',
//               imageL: '../assets/images/destroyer1.jpg'
//             },
//             {
//               id: '13',
//               categoryId: '1',
//               title: 'Battle Cruisers',
//               price: 13,
//               isSpecial: true,
//               desc:
//                   `Battlecruisers and battleships, thus, often act as the heavy hitters in a fleet; they are the main combatants and are protected by other vessels such as frigates and destroyers.  Being that they are capital ships, an engagement is usually won through battlecruisers and battleships.`,
//               imageS: '../assets/images/battlecruiser1.jpg',
//               imageL: '../assets/images/battlecruiser1.jpg'
//             },
//             {
//               id: '15',
//               categoryId: '1',
//               title: 'Executor',
//               price: 14,
//               isSpecial: true,
//               desc:
//                   `Dreadnoughts are just about always gigantic ships; massive vessels that dwarf even the largest battleships or battlecruisers.  The role they fulfill is exactly like a battleship or battlecruiser; complete dominance and superiority.  Intimidation, even more so than with battleships, is the name of the game when it comes to dreadnoughts.`,
//               imageS: '../assets/images/executor3.jpg',
//               imageL: '../assets/images/executor3.jpg'
//             },


//             {
//               id: '4',
//               categoryId: '1',
//               title: 'Cruisers',
//               price: 4,
//               isSpecial: true,
//               desc:
//                   `Cruisers are medium-sized vessels, able to operate independently but also commonly seen within a fleet.  They would have the capacity to be used as anti-fighters, planetary bombers, raiders of enemy supply lines, and scouts. `,
//               imageS: '../assets/images/cruiser1.jpg',
//               imageL: '../assets/images/cruiser1.jpg'
//             },
//             {
//               id: '5',
//               categoryId: '2',
//               title: 'JavaScript',
//               price: 5,
//               isSpecial: true,
//               desc:
//                   `is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.`,
//               imageS: '../assets/images/JS1.png',
//               imageL: ''
//             },
//             {
//               id: '6',
//               categoryId: '2',
//               title: 'HTML5',
//               price: 6,
//               isSpecial: true,
//               desc:
//                   `is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard.`,
//               imageS: '../assets/images/HTML5.png',
//               imageL: '../assets/images/HTML5.png'
//             },
//             {
//               id: '7',
//               categoryId: '2',
//               title: 'CSS3',
//               price: 7,
//               isSpecial: true,
//               desc:
//                   `CSS 3 is divided into several separate documents called "modules". Each module adds new capabilities or extends features defined in CSS 2, preserving backward compatibility.`,
//               imageS: '../assets/images/CSS3.jpg',
//               imageL: '../assets/images/CSS3.jpg'
//             },
//             {
//               id: '8',
//               categoryId: '2',
//               title: 'C++',
//               price: 8,
//               isSpecial: true,
//               desc:
//                   `C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.`,
//               imageS: '../assets/images/CPP.png',
//               imageL: '../assets/images/CPP.png'
//             },

//             {
//               id: '16',
//               categoryId: '2',
//               title: 'Angular',
//               price: 15,
//               isSpecial: true,
//               desc:
//                   `Angular is a complete JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications`,
//               imageS: '../assets/images/NG1.png',
//               imageL: '../assets/images/NG1.png'
//             },
//             {
//               id: '17',
//               categoryId: '2',
//               title: 'Android',
//               price: 16,
//               isSpecial: true,
//               desc:
//                   `Android is a mobile operating system developed by Google, based on the Linux kernel and designed primarily for touchscreen mobile devices such as smartphones and tablets. Android's user interface is mainly based on direct manipulation, using touch gestures that loosely correspond to real-world actions, such as swiping, tapping and pinching, to manipulate on-screen objects, along with a virtual keyboard for text input.`,
//               imageS: '../assets/images/ANDROID1.png',
//               imageL: '../assets/images/ANDROID1.png'
//             },

//             {
//               id: '9',
//               categoryId: '3',
//               title: 'Matter',
//               price: 9,
//               isSpecial: true,
//               desc:
//                   `In the classical physics observed in everyday life, if something has mass and takes up space, it is said to be composed of matter; this includes atoms (and thus molecules) and anything made up of these, but not other energy phenomena or waves such as light or sound`,
//               imageS: '../assets/images/matter.jpg',
//               imageL: '../assets/images/matter.jpg'
//             },
//             {
//               id: '10',
//               categoryId: '3',
//               title: 'Energy',
//               price: 10,
//               isSpecial: true,
//               desc:
//                   `In physics, energy is a property of objects which can be transferred to other objects or converted into different forms.[1] The "ability of a system to perform work" is a common description, but it is misleading because energy is not necessarily available to do work`,
//               imageS: '../assets/images/energy.jpg',
//               imageL: '../assets/images/energy.jpg'
//             },
//             {
//               id: '11',
//               categoryId: '3',
//               title: 'Space',
//               price: 11,
//               isSpecial: true,
//               desc:
//                   `Space is the boundless three-dimensional extent in which objects and events have relative position and direction.[1] Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime.`,
//               imageS: '../assets/images/space.png',
//               imageL: '../assets/images/space.png'
//             },
//             {
//               id: '12',
//               categoryId: '3',
//               title: 'Quantum Mechanics',
//               price: 12,
//               isSpecial: true,
//               desc:
//                   `Quantum mechanics (QM; also known as quantum physics or quantum theory), including quantum field theory, is a fundamental branch of physics concerned with processes involving, for example, atoms and photons. Systems such as these which obey quantum mechanics can be in a quantum superposition of different states, unlike in classical physics.`,
//               imageS: '../assets/images/QM.png',
//               imageL: '../assets/images/QM.png'
//             },
//             {
//               id: '18',
//               categoryId: '3',
//               title: 'Phenomenon',
//               price: 17,
//               isSpecial: true,
//               desc:
//                   `A phenomenon is any event that is observable, however common it might be, even if it requires the use of instrumentation to observe, record, or compile data concerning it. For example, in physics, a phenomenon may be described by a system of information related to matter, energy, or spacetime, such as Isaac Newton's observations of the moon's orbit and of gravity, or Galileo Galilei's observations of the motion of a pendulum.`,
//               imageS: '../assets/images/phenomenon1.jpg',
//               imageL: '../assets/images/phenomenon1.jpg'
//             },
//             {
//               id: '19',
//               categoryId: '3',
//               title: 'Hypothesis',
//               price: 18,
//               isSpecial: true,
//               desc:
//                   `A hypothesis (plural hypotheses) is a proposed explanation for a phenomenon. For a hypothesis to be a scientific hypothesis, the scientific method requires that one can test it. Scientists generally base scientific hypotheses on previous observations that cannot satisfactorily be explained with the available scientific theories. Even though the words "hypothesis" and "theory" are often used synonymously, a scientific hypothesis is not the same as a scientific theory. A working hypothesis is a provisionally accepted hypothesis proposed for further research.`,
//               imageS: '../assets/images/hypothesis1.jpg',
//               imageL: '../assets/images/hypothesis1.jpg'
//             }
//           ];

//   getProducts(category?: string, search?: string) {
//     if (category) {
//       return this.products.filter(
//           (product: Product, index: number, array: Product[]) => {
//             return product.categoryId === category;
//           });
//     } else if (search) {
//       let lowSearch = search.toLowerCase();
//       return this.products.filter(
//           (product: Product, index: number, array: Product[]) => {
//             return product.title.toLowerCase().indexOf(lowSearch) !== -1;
//           });
//     } else {
//       return this.products;
//     }
//   }

//   getProduct(id: string): Product {
//     for (let i = 0; i < this.products.length; i++) {
//       if (this.products[i].id === id) {
//         return this.products[i];
//       }
//     }
//     throw new ProductNotFoundException(`Product ${id} not found`);
//   }
}

export class ProductNotFoundException extends Error {
  constructor(message?: string) { super(message); }
}