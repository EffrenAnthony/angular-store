import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../product.model';
import { CartService } from '../../core/services/cart.service';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  products: Product[];

  constructor(private cartService: CartService){
  }

  transform(product: any): any {
    let total = 0;
    // tslint:disable-next-line: deprecation
    this.cartService.cart$.subscribe(products => {
      products.forEach((elemento) => {
        if (elemento.id === product.id){
          total += 1;
        }
      });
    });
    return total;
  }

}
