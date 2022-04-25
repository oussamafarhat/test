import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: Observable<User>
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any>("http://localhost:3000/users");
  }
  register(user:User){
    return this.http.post("http://localhost:9000/api/register",user);
  }
  authenticateUser(user:any){
   
    return this.http.post<any>("http://localhost:9000/login",user);
  }

  isUserAuthenticated(token:any): Promise<any>{
    
    return this.http.post<any>("http://localhost:9000/api/login",{},{
      headers: new HttpHeaders().set("Authorization","Bearer "+token)
    }).toPromise();
  }

  setToken(token:any){
    localStorage.setItem("bearer",token);
  }
  clearToken(){
    localStorage.setItem("bearer"," ");
  }

}
