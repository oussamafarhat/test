import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  navigateToLogin(){
    this.router.navigate(['login']);
  }
  navigateToRegistration(){
    this.router.navigate(['register']);
  }
  navigateToUserDetails(){
    this.router.navigate(['user','details']);
  }
  navigateToUserManagement(){
    this.router.navigate(['users']);
  }
}
