import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AutenticacaoService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("canActivate");
    return this.verificarAutenticacaoUser();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log("canLoad");
    return this.verificarAutenticacaoUser();
  }


  private verificarAutenticacaoUser() {
    const autenticado = this.authService.isAuthenticated();
    if (autenticado) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
