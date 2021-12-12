import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { IUser } from 'src/app/models/user/i-user';
import { UsersService } from 'src/app/services/user/users.service';
import { Router } from '@angular/router';
import { UsersThirdPartyService } from 'src/app/services/thirdParty/users-third-party.service';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
})
export class AllUserComponent implements OnInit {
  closeResult = '';
  formValue: FormGroup;
  userModalObj : IUser ;
  errors: string[] = [];
  user = new FormGroup({
    first_name : new FormControl('' , [Validators.required]) ,
    last_name : new FormControl('' , [Validators.required]) ,
    email : new FormControl('' , [Validators.required]) ,
    avatar : new FormControl('' , [Validators.required]) ,



})


  userData : any [] = [];
    constructor(
    private authService: AuthService,
    private userService : UsersService,
    private router: Router,
    private userThirdParty : UsersThirdPartyService
   ) {}

  ngOnInit(): void {


    this.getAllUsers();
  }

  postUserModal(){

    this.userThirdParty.addUser(this.user.value).subscribe({
      next: (res) =>{
        this.userData.push(res)
        console.log(res);
        alert("User Added successfully")
      },
      error: (err) =>{
        this.errors = [];
        this.errors.push('Something wrong');      }

    })

  }
  onDelete(id: number) {
    console.log(id)
    if (confirm('Are you sure to delete ?')) {
      this.userThirdParty.deleteUser(id).subscribe((res) => {
        console.log(res);
      });
    }
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((res) => {

        for(let i in res.data){
          this.userData.push(res.data[i]);
     }


    });

    this.userThirdParty.getUsers().subscribe((res) => {
      for(let i in res){
        this.userData.push(res[i]);
   }
    });

  }

  isLogged() {
    return this.authService.isLogged;
  }

  /**
   * Logout on Click
   */
  logout() {
    this.authService.logout();
  }





  updateUserClick(){
    this.router.navigate(['/users/update']);

  }

}
