import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey = 'AIzaSyD6ufy7HIgSfqDLnu4XlzCm1hIwc4fKRi0'
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
  // isLoggedIn = false;
  isLoggedIn?: Boolean;

  user: any;

  constructor(private http: HttpClient, private router: Router) { }

  createUser(email: string, id: string, token : string, expirationDate: Date) {
    this.user = new User(email,id,token,expirationDate);
    this.isLoggedIn = true;
  }

  signUp(email: string,  password: string) {
    this.router.navigate(['/login']);
    return this.http.post(this.signUpUrl, {email: email, password: password, returnSecureToken: true});
  }

  signIn(email: string,  password: string) {
    return this.http.post(this.signInUrl, {email: email, password: password, returnSecureToken: true});
  }

  logOut() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user');
  }

  // getLoggedIn() {
  //   console.log(this.isLoggedIn);
  //   return this.isLoggedIn;
  // }
}
