import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductsComponent } from './products/products.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
import { AboutUsModule } from './about-us/about-us.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    // path: '',
    path: '',
    component: LayoutComponent,
    // con redirect y pathMatch hacemos que la raiza redirección al home, o el path que indicamos
    // redirectTo: 'home',
    // pathMatch: 'full',

    // con esta propiedad mas el componente Layout, agregamos un componente que todos compartan. en este caso el layout
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        // path: '',
        path: 'home',
        // en ves de cargar un componente, cargaremos un modulo
        // component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        // component: ProductsComponent
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      // {
      //   // aqui indicamos que a la ruta le llegará un id
      //   path: 'products/:id',
      //   loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
      //   // component: ProductDetailComponent
      // },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
        // component: ContactComponent
      },
      {
        path: 'about-us',
        canActivate: [AdminGuard],
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
        // component: ContactComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

