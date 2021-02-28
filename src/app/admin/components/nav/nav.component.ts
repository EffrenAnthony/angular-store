import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  currentUser = '';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
    ) {
      this.getCurrentUser();
    }

  logout(): void{
    this.authService.logout()
    .then(() => {
      this.router.navigate(['home']);
    });
  }

  getCurrentUser(): void{
    this.authService.currenUser().then((result: any) => {
      console.log(result.email);
      this.currentUser = result.email;
    });
  }
}
