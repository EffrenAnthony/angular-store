import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponentials/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  exports: [
    // tenemos que exportar tambien estos componentes, para poder utilizarlos fuera de este modulo
    HighlightDirective,
    ExponentialPipe,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    // para indicar que podemos usar router module en estos componentes
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
