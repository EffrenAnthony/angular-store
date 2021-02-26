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
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
      // console.log(product);
      });
  }

  fetchProduct(id: string): void{
    this.productsService.getProduct(id)
    // tslint:disable-next-line: deprecation
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(): void{
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'https://i.ebayimg.com/thumbs/images/g/61gAAOSwkLNezrbK/s-l960.jpg',
      description: 'bla blab balbabab',
      price: 30000
    };
    this.productsService.createProduct(newProduct)
    // tslint:disable-next-line: deprecation
    .subscribe(product => {
      console.log(product);
    });
  }
  updateProduct(): void{
    const updatedProduct: Partial<Product> = {
      title: 'actualizado desde angular',
      description: 'bla blab balbabab',
      price: 5555
    };
    this.productsService.updateProduct('5', updatedProduct)
    // tslint:disable-next-line: deprecation
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(): void{
    this.productsService.deleteProduct('6')
      .subscribe(res => {
        console.log(res);
      });
  }

}
