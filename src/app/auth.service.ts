import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from './model/login.model';
import { User } from './model/user.model';
import { UserService } from './services/user.service';

const AUTH_API = 'http://localhost:8087/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  role: string;
  visible: boolean = false;

  constructor(private userService: UserService,
    private http: HttpClient) { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 500)
      }
    );
    return promise;
  }

  login() {
    return this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  visibility(): boolean {
    return this.visible = true;
  }

  login2(login: login): Observable<any> {
    return this.http.post(AUTH_API + 'signin', login, httpOptions);
  }

  register(user: User): Observable<any> {
    return this.http.post(AUTH_API + 'signup', user, httpOptions);
  }


}
