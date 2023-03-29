import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authservice: AuthService) {}

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    //chiamare auth service
    this._authservice.signUp(email, password)
    .subscribe(data => {
      console.log(data);
    })

    form.reset();
  }

}
