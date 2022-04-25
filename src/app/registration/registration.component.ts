import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form;
  users:User[]=[];
  isValidFormSubmitted:boolean;
  emailPattern = "^[a-z0-8]+@[a-z3-9]+\.[a-z]{2,3}$";
  passwordPatten="((?=.*[a-z])(?=.*d)(?=.*[A-Z]).{6,16})";
  constructor(private formbuilder:FormBuilder,private service:UserService) {
    this.isValidFormSubmitted=false;
    this.form=this.formbuilder.group({
      email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      password:['',[Validators.required,Validators.pattern(this.passwordPatten)]]
    })
   }

  ngOnInit(): void {
  }
  register() {
    if (this.form.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    let user = this.form.value;
    this.service.register(user).pipe(first())
    .subscribe(elem=>{})
    this.form.reset();
 }
 get email() {
  return this.form.get('email');
}      
 get password() {
    return this.form.get('password');
 }  
 
 
}
