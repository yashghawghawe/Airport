import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllManagers():Observable<any>{
    return this.http.get('http://localhost:8087/admin/ViewManagers');
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete('http://localhost:8087/admin/DeleteUser/'+id);
  }
}
