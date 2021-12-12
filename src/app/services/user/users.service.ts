import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://reqres.in/api/';

  constructor(private http: HttpClient, private router: Router) {}

  getApi(){
    return this.http.get(this.url + 'users')
  }
  addUser(data : IUser){
    const req = this.http.post<any>(this.url + 'users' , data)
    return req

  }
  deleteUser(id : number){
    const delReq = this.http.delete(this.url + 'users/' + id);
    delReq.subscribe(res =>{
      console.log(res)
    })
  return delReq
  }
  updateUser( data : any , id :number){
    const userReq = this.http.put<any>(this.url +'users/'+ id, data )
    return userReq
  }
  getUsers(){
    return this.http.get<any>('https://reqres.in/api/users')
  }
  getSingleUser(id:number){
    return this.http.get<any>(this.url +'users/' + id);
  }
}
