import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileComponent } from '../profile/profile.component';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  visible = false;
  private role: string;
  isLoggedIn = false;
  username: string;

  constructor(private router: Router, private authService: AuthService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.role = user.userRole;
      this.username = user.username;
    }
  }

  navigate() {
    this.router.navigate(['/register']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  logout() {
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
    this.router.navigate(['/home']);
    //window.location.reload();
  }

  checked(){
    // this.profile.checkUserRole();
  }

}
