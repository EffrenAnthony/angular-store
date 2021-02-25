import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy} from '@angular/core';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
// PARA EJECUTAR ONCHAGES, ONINIT U OTRA HAY QUE IMPLEMETAR LA ITNERFAZ
// export class ProductComponent implements DoCheck, OnInit, OnDestroy{
export class ProductComponent implements OnInit{
  // al hacer eso, es decir al ponerlo como inputa, nuestro componente recibirá su información desde otro componente
  @Input() product: Product ;
  //  los event emmiter deben inicializarse
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){
    // console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('2. ngOnChange');
  //   console.log(changes);
  // }

  ngOnInit(): void {
    // console.log('3. ngOnInit');
  }
  // no podemos usar ngOnChanges y ngDoCheck porque el primero revisa cambios de manera nativa y el otro customizada
  // ngDoCheck(): void {
  //   console.log('4. ngDoCheck');
  // }

  // ngOnDestroy(): void {
  //   console.log('5. ngOnDestroy');
  // }

  addCart(product: string): void{
    console.log(`se añadió ${product}`);
    // este evento se emite al padre, lo que emitimos es ese this.product.id
    this.productClicked.emit(this.product.id);
  }
}
