import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat:any={};
  addPlatForm:FormGroup;
  constructor(private formBuilder: FormBuilder, private platService:PlatService, private router:Router) {
    
   }

  ngOnInit() {
    // this.addPlatForm =this.formBuilder.group({
    //   name:[""],
    //   price:[""],
    //   description:[""],
    // })
  }
  addPlat(){
    this.platService.addPlat(this.plat).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

  
}
