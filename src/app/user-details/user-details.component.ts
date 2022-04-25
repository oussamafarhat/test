import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:User[]=[]
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((elem)=>{
      this.users=elem;
      console.log(this.users);
    } )
  }

}
