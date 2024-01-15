import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
  constructor( private userService:UserService, private router:Router) { }

  ngOnInit() {

  }


  login(){
    let findedUser:any={};
    this.userService.login(this.user.email,this.user.password).subscribe(
      (data)=> {
       findedUser=data.findedUser;
        console.log("Here data from BE",data.findedUser);
        this.router.navigate([""]);
      }
    );



  //   let usersTab:any=JSON.parse(localStorage.getItem('users') || "[]");
  //   let findedUser:any=null;
  //   for(var i=0; i<usersTab.length; i++){ //parcourir le tableau userTab pour vérifier l'email le pwd
  //     if((usersTab[i].email==this.user.email) && (usersTab[i].pwd==this.user.pwd)){
  //         findedUser=usersTab[i];
  //         break; //si on la condition est vérifiée on récupére userTab[i] et on arrête la recherche
  //     }   
  // }
  // if(findedUser){ //si le compte existe
  //   localStorage.setItem('connectedUserId', findedUser.id);
  // }
  // else { //si le compte n'existe pas
  //   alert("Erreur email ou mot de passe");}
  // }

}}