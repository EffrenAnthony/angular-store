import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // aqui le damos true para accesder o false para bloquear ruta
    return this.authService.isLoged().pipe(
      map(user => user === null ? false : true),
      // tab nos permite hace una aacción antes o despues del map
      tap(hasUser => {
        if (!hasUser){
          this.router.navigate(['/auth/login']);
        }
      }),
    );
  }

}
