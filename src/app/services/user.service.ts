import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: Observable<User>
  headers= new HttpHeaders().set('Content-Type','application/json')
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any>("http://localhost:3000/users"
    // ,{
    //   headers: new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem('bearerToken'))
    // }
    );
  }
  getUser(id:any): Observable<any> {
    return this.http.get<any>("http://localhost:3000/api/users/"
    
   +id+"/"
  //  ,{
  //    headers: new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem('bearerToken'))
  //  }
    
    );
  }
  addUser(user: any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/users",user,{'headers':this.headers})
  }
  register(user:User){
    return this.http.post("http://localhost:3000/api/register",user);
  }
  authenticateUser(user:any){
   
    return this.http.post<any>("http://localhost:3000/login",user);
  }

  isUserAuthenticated(token:any): Promise<any>{
    
    return this.http.post<any>("http://localhost:3000/api/login",{},{
      headers: new HttpHeaders().set("Authorization","Bearer "+token)
    }).toPromise();
  }

  setToken(token:any){
    localStorage.setItem("bearer",token);
  }
  getBearerToken() {
    return localStorage.getItem('bearerToken');

  }
  clearToken(){
    localStorage.setItem("bearer"," ");
  }

}
