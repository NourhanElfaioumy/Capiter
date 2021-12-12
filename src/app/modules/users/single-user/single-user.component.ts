import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user/i-user';
import { UsersThirdPartyService } from 'src/app/services/thirdParty/users-third-party.service';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  userData :IUser;
  id : number
  constructor( private userService : UsersService , private activeRoute:ActivatedRoute , private userThirdParty : UsersThirdPartyService) {
console.log(activeRoute)
    this.id = activeRoute.snapshot.params['id']
  }


  ngOnInit(): void {
    this.singleUser(this.id);
  }
  singleUser(id:number){
if(id < 1000){
  this.userService.getSingleUser(id).subscribe(res =>{
    this.userData = res.data
  }
  )
}else{
  this.userThirdParty.getSingleUser(id).subscribe(res =>{
    console.log(res.body)

    this.userData = res.body
  })
}

    // this.userService.getUsers().subscribe(res =>{
    //   for(let i in res.data){
    //     if(res.data[i].id == id){
    //       this.userService.getSingleUser(id).subscribe(res =>{
    //         this.userData = res.data[i]
    //       })
    //       return;
    //     }
    //   }

    // })

    // this.userThirdParty.getUsers().subscribe(res =>{
    //   for(let i in res){
    //     if(res[i].id == id){
    //       this.userThirdParty.getSingleUser(id).subscribe(res =>{
    //         this.userData = res[i]
    //       })
    //       return;
    //     }
    //   }

    // })

  }

}


