import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

// import {ProductComponent} from './products/components/product/product.component';
// import { CartComponent } from './shared/components/cart/cart.component';

// import { ProductsComponent } from './products/products.component';
// import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
// import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
// import { ContactModule } from './contact/contact.module';
// import { ProductsComponent } from './products/components/products/products.component';
// import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// import { AboutUsModule } from './about-us/about-us.module';
// import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // CartComponent,
    // ProductsComponent,
    // ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    LayoutComponent,

  ],
  // para hacer lazy loading, NO tenemos que importar los modulos creados fuera del app.module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    // HomeModule,
    SharedModule,
    CoreModule,
    // ContactModule,
    // ProductsModule,
    BrowserAnimationsModule,
    // ProductDetailModule
    // ProductsComponent
    // AboutUsModule,
    NgbModule,
    // AdminModule
    AuthModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    // AngularFirestore

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
