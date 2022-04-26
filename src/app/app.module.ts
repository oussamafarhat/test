import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivateUsersManagementGuard } from './activate-users-management.guard';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent}, 
  // ,canActivate:[ActivateUsersManagementGuard]
  {path: 'user/details/:id', component:UserDetailsComponent},
  {path: 'add/user', component:AddUserComponent},
  {path: 'users',component:UsersManagementComponent},
   
  {path:'',redirectTo:'login',pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserDetailsComponent,
    UsersManagementComponent,
    AddUserComponent
         
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
