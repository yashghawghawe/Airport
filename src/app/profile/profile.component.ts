import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  isLoggedIn: boolean;
  firstname: string;
  lastname: string;
  username: string;
  userRole: string;
  gender: string;
  age: number;
  contactNo: number;
  name: Array<string>;
  admin: boolean;
  manager: boolean;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      let user = this.tokenStorage.getUser();
      this.username = user.username;
      this.userRole = user.role;
      this.firstname = user.firstname;
      this.lastname = user.lastname;
      this.contactNo = user.contactno;
      this.gender = user.gender;
      this.age = user.age;
      if (this.userRole == "[A]") {
        this.admin = true;
        this.userRole = "Admin";
      } else if(this.userRole == "[M]") {
        this.manager = true;
        this.userRole = "Manager";
      }
      this.name = this.username.split(".");
      this.firstname = this.name[0].toUpperCase();
    }
  }

  // checkUserRole(){
  //   user = this.tokenStorage.getUser();
  // }
}


