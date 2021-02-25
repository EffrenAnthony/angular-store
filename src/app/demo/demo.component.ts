import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'angular-store';
  items = ['tony', 'bel', 'lufa', 'carlos' ];

  //  para iterar objetos, tenemos que tenerlos dentro de un array, ya que en angular un objeto, no es iterable
  objeto = {};

  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void{
    this.items.push(this.title);
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

}
