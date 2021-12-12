import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uri = 'https://reqres.in/api/';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: { email: string; password: string }) {
    const request = this.http.post(this.uri + 'login', data);
    request.subscribe((res: any) => {
      this.setToken(res.token);
      this.router.navigate(['/users']);
    });
    console.log(request)
    return request;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  get isLogged() {
    return this.getToken() !== null;
  }
}
