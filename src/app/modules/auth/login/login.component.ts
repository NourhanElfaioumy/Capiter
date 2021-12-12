import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserFromData = {};
  errors: string[] = [];

  user = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  loginUser() {
    if (!this.user.valid) return;
    this.auth.login(this.user.value).subscribe({
      next: (res) => {
        this.router.navigate(['/users']);
      },
      error: (err) => {
        this.errors = [];
        this.errors.push('Email or Password Is Invalid');
      },
    });
  }
}
