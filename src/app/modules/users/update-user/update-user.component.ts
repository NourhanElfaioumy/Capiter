import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user/i-user';
import { UsersService } from 'src/app/services/user/users.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

userData : IUser;
  constructor(  private userServ : UsersService , private activeRoute:ActivatedRoute) {
    this.activeRoute.params.subscribe(param =>{
      this.userServ.getSingleUser(param['id']).subscribe(res =>{
        this.userData = res.data
      })
    })
   }
  user = new FormGroup({
    first_name : new FormControl('' , [Validators.required]) ,
    last_name : new FormControl('' , [Validators.required]) ,
    email : new FormControl('' , [Validators.required]) ,
    avatar : new FormControl('' , [Validators.required]) ,



})

  ngOnInit(): void {
  }

  onEdit(user:any){
    this.user.controls['first_name'].setValue(user.first_name);
    this.user.controls['last_name'].setValue(user.last_name);
    this.user.controls['email'].setValue(user.email);
    this.user.controls['avatar'].setValue(user.avatar);

  }
  updateUserDetails(){

  }
}
