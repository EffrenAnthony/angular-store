import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { CartService } from '../../../core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]> ;
  // aca tenemos la escucha continua de los productos del carrito
  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
