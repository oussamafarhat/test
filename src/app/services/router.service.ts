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
  navigateToUserDetails(id:any){
    this.router.navigate(['user','details',id]);
  }
  navigateToUserManagement(){
    this.router.navigate(['users']);
  }
  navigateToAddUser(){
    this.router.navigate(['add','user']);
  }
}
