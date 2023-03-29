import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashTestProj';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate);
    }
  }

  // onLogOut() {
  //   this.authService.logOut();
  // }
}
