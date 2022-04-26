import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from './services/router.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateUsersManagementGuard implements CanActivate {
  constructor(private service:UserService,private routeService:RouterService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const booleanPromise = this.service.isUserAuthenticated(this.service.getBearerToken());

      return booleanPromise.then((auth) => {
        console.log(auth);
        if (!auth["isAuthenticated"]) {
          this.routeService.navigateToUserManagement();
          
        } 
        return auth["isAuthenticated"];
      });
  }
  
}
