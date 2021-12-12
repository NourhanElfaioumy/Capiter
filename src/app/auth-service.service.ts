import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class AuthServiceService {

 private _loginUrl = "https://reqres.in/api/login";

  constructor( private http:HttpClient) { }

getApi(){
  return this.http.get('https://reqres.in/api/users?page=2')
}





}
