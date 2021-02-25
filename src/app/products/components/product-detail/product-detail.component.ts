import { Component, OnInit } from '@angular/core';
// indicamos que necesitamos ActivatedRoute y Paramas para la ruta dinamica
import { ActivatedRoute, Params} from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  // la declaramos en el constructor
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  // nos suscribimos a esa ruta de la siguiente
  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
      // console.log(product);
      });
  }

}
