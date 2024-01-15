import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  
//form ID
addChefForm: FormGroup;
chef:any={};

  constructor(private chefService:ChefService , private router:Router) {
   
   }

  ngOnInit() {
   
  }
  addChef(){
    this.chefService.addChef(this.chef).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

  
}
