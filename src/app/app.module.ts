import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// import {ProductComponent} from './products/components/product/product.component';
import { CartComponent } from './cart/cart.component';

// import { ProductsComponent } from './products/products.component';
// import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contact/contact.module';
// import { ProductsComponent } from './products/components/products/products.component';
import { ProductsModule } from './products/products.module';
import { ProductDetailModule } from './product-detail/product-detail.module';


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    // ProductsComponent,
    // ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    HomeModule,
    SharedModule,
    CoreModule,
    ContactModule,
    ProductsModule,
    ProductDetailModule
    // ProductsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
