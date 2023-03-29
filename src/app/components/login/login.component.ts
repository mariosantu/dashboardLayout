import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _authservice: AuthService, private router: Router) {}


  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    // console.log(email);
    // console.log(password);


    //chiamare auth service
    this._authservice.signIn(email, password)
    .subscribe((data: any) => {
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
      console.log(data);
      this._authservice.createUser(data.email, data.localId,  data.idToken, expirationDate); 
      // console.log(this._authservice.user);
      localStorage.setItem('user', JSON.stringify(this._authservice.user))
      this.router.navigate(['/pagina1']);

    })

    form.reset();
  }
  
}
