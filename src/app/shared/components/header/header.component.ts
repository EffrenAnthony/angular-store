import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;
  total$: Observable<number>;
  constructor(
    private cartService: CartService
  ) {
    // Pipe es una funcion que recibe un obsevable lo opera devolviendo otro observable. pipe Operators
    // $ ahora total es un observable y nos suscribiremos en el template
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
      // tslint:disable-next-line: deprecation
    // .subscribe(total => {
    //   // console.log(products);
    //   this.total = total;
    // });
  }

  ngOnInit(): void {
  }

}
