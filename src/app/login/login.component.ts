import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { RouterService } from '../services/router.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  emailPattern = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  isValidFormSubmitted:boolean
 

 errorMessage:string;
  constructor(private service:UserService,private routeservice:RouterService,private formbuilder:FormBuilder) {
    this.isValidFormSubmitted=false;
    this.loginForm=this.formbuilder.group({
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required,Validators.minLength(1)]]
    })
   }

  ngOnInit(): void {
  }
login(){
  if (this.loginForm.invalid) {
    return;
 }
 this.isValidFormSubmitted = true;
  let user = {email:this.loginForm.value.email.value,password:this.loginForm.value.password.value};
  this.service.authenticateUser(user).subscribe((response)=>{
   
    let token = response['token'];
    this.service.setToken(token);
    this.routeservice.navigateToUserManagement();
   
  },(error)=>{
    console.log(error);
    if(error.status == 403){
      this.errorMessage = error.error.message;
    }
    else if (error.status === 404) {
      this.errorMessage = error.message;
}
  })
}
 get email() {
  return this.loginForm.get('email');
}      
 get password() {
    return this.loginForm.get('password');
 }  
}
