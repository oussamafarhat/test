import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  users:User[]=[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((elem)=>{
      this.users=elem;
      console.log(this.users);
    } )
  }

}
