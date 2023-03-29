import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // isLoggedIn?: Boolean;

  constructor(public router: Router, private authService :AuthService) {}

  ngOnInit(){
    // this.getLoggedIn();
  }

  onLogOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  // getLoggedIn() {
  //   this.isLoggedIn = this.authService.getLoggedIn();
  // }

}
