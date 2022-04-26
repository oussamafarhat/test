import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:User
  id:any
  users:User[]=[]
  constructor(private service:UserService,private route: ActivatedRoute,private routeservice:RouterService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');
      
   });
   this.service.getUsers().subscribe((elem)=>{
    this.users=elem;
    
    for (let i=0;i<this.users.length;i++){
      
      if (this.users[i].userId==this.id){
      this.user=this.users[i];
    
      }
    }
  } )
  
  }
  goToUsersManagement(){
    this.routeservice.navigateToUserManagement();
  }

}
