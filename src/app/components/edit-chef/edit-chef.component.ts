import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
  chefsTab: any = [];
  editChefForm: FormGroup;
  id:any;
  constructor(private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {  }

  ngOnInit() {
   
    //Création des inputs: formBuilde.group({})
    this.editChefForm = this.formBuilder.group({
      speciality: [''],
      experience: ['']
    })
    this.id = this.activateRoute.snapshot.paramMap.get("x");
    this.chefsTab = JSON.parse(localStorage.getItem("chefs") || "[]");
    for (let i = 0; i < this.chefsTab.length; i++) {
      if (this.chefsTab[i].id == this.id) {
        this.editChefForm.value.speciality = this.chefsTab[i].speciality;
        this.editChefForm.value.experience = this.chefsTab[i].experience;
        // console.log("", this.editChefForm.value);
        break;
      }
    }
 this.editChefForm=this.formBuilder.group({
  speciality: [`${this.editChefForm.value.speciality}`],
  experience: [`${this.editChefForm.value.experience}`],
 })



  }


  editChef() {
    for (let i = 0; i < this.chefsTab.length; i++) {
      if (this.chefsTab[i].id == this.id) {
        this.editChefForm.value.name=this.chefsTab[i].name;
        this.editChefForm.value.id=this.chefsTab[i].id;
        this.chefsTab[i]=this.editChefForm.value;
        break;
      }
    }

    localStorage.setItem("chefs", JSON.stringify(this.chefsTab));
    this.router.navigate(["admin"]);
  }

}
