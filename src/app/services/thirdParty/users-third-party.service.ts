import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from 'src/app/models/user/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersThirdPartyService {

  constructor(private http : HttpClient) { }
   private url:any ="http://localhost:3000/data";


   addUser(data : IUser){
    const req = this.http.post<any>(this.url  , data)
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
    return this.http.get<any>(this.url)
  }
  getSingleUser(id:number){
    return this.http.get<any>(this.url +'users/' + id);
  }
}
