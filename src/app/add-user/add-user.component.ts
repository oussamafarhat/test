import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form;
  constructor(private formbuilder:FormBuilder,private service:UserService,private routeservice:RouterService) {
    this.form=this.formbuilder.group({
      email:['',[Validators.required]],
      firstName:['',[Validators.required]],
      LastName:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  add(){
    this.routeservice.navigateToUserManagement();
  }

}
