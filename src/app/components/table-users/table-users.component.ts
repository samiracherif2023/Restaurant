import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
users:any=[];
  constructor( private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data.usersArray;
      }
    )
  }
  deleteUser(id){
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.userService.getAllUsers().subscribe(
          (data) => {
            this.users = data.usersArray;
          }
        );
      })
  }
  editProfile(id:any){
    this.router.navigate([`editProfile/${id}`]);
  }
}
