import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id:any;
  user:any={};
  constructor( private activateRoute:ActivatedRoute, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.id= this.activateRoute.snapshot.paramMap.get("x");
this.userService.getUserById(this.id).subscribe(
  (data)=> {
    this.user=data.user
  });
  }

  editProfile(){
    this.userService.editProfile(this.user).subscribe(
      (data)=>{
        console.log("Here data after edit",data);
      }
    )
this.router.navigate(["admin"]);
  }

}
