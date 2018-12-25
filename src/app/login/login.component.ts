import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  angForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: LoginService) {
   this.createForm();
  }

   createForm() {
    this.angForm = this.fb.group({
       username: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.min(8)]]
    });
  }

  onLogin() {
    console.log(this.username, this.password);
    this.service.login(this.username, this.password)
    .subscribe((response) => {
      const body = response.json();
      if (body.status === 'success') {
        console.log(body);
        sessionStorage['loginStatus'] = 1;
        this.router.navigate(['/home']);
      } else {
        console.log(body);
        alert('Invalid Login and Password');
      }
    });
  }
}
