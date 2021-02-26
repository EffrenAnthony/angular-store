import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  // ];

  constructor(
    private http: HttpClient
  ) { }

  // getAllProducts(): Product {
  getAllProducts(): any {
    // Tenemos que tipar la respuesta de esta manera
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  // getProduct(id: string): Product{
  getProduct(id: string): any {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
    // return this.products.find(item => id === item.id);
  }

  createProduct(product: Product): any{
    return this.http.post(`${environment.url_api}/products`, product);
  }

  // con Partial<type> podemos mandar el tipo que indicamos pero parcialente
  updateProduct(id: string, changes: Partial<Product>): any {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): any{
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
