import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  // inicializamos esta variable de tipo array de productos como un array vació
  private cart = new BehaviorSubject<Product[]>([]);
  // creamos una instacia de cart y le indicamos que se comporte como un observable
  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product): any {
    // con los 3 puntos lo que hacemsos es agregar el utlimo producto con inmutabilidad,
    // creamos un nuevo estado del arreglo,  como un update
    this.products = [...this.products, product];
    // asi le indicamos y comnunicamos a los observers el estado del carrito
    this.cart.next(this.products);
  }
}
