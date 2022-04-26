import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  users:User[]=[]
  constructor(private service:UserService,private routeservice:RouterService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((elem)=>{
      this.users=elem;
      console.log(this.users);
    } )
  }
  logout(){
    this.service.clearToken();
    this.routeservice.navigateToLogin();
  }
  goToUserDetails(id:any){
    this.routeservice.navigateToUserDetails(id);
  }
  goToAddUser(){
    this.routeservice.navigateToAddUser();
  }


}
