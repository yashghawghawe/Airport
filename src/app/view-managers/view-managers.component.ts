import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-view-managers',
  templateUrl: './view-managers.component.html',
  styleUrls: ['./view-managers.component.scss']
})
export class ViewManagersComponent implements OnInit {

  users: Array<User>;
  message:String;
  deleted = false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllManagers().subscribe(
      (data) => {
        this.users = data;
      }
    );
  }

  deleteUser(user: User) {
    let value = window.confirm("do you want to delete " +user.firstname+" "+user.lastname+"")
    if (value == true) {
      this.adminService.deleteUser(user.id).subscribe(data => {
        this.message = data;
        this.deleted = true;
      });
    }
    else{
      
    }
    window.location.reload();
  }
  
}
