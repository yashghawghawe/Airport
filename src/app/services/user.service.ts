import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUser(user:User){
    this.http.post('http://localhost:8087/SaveUser',user).subscribe(
      response => {
        //console.log(response);
      }
    )
  }
}
