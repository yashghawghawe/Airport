import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService,
    private authService: AuthService) { }

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  role: string = "M";
  age: string = "";
  number: number;
  password: string = "";
  gender: string = "Male";
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  user: User;

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.user = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      age: form.value.age,
      gender: form.value.gender,
      contactNo: form.value.contactNo,
      username: form.value.username,
      password: form.value.password,
      userRole: form.value.userRole
    }
    //this.userService.saveUser(this.user);
    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    console.log(form.value);
    form.reset();
    //window.alert("You Have Been Registered Successfully")
    //this.router.navigate(['/login']);
  };

}
