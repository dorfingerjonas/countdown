import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const pin = '0306';

    if (localStorage.getItem('pin') === pin) {
      return true;
    }

    if (prompt() === pin) {
      localStorage.setItem('pin', pin);
      return true;
    }

    return false;
  }
}
