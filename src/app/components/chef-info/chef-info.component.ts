import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css']
})
export class ChefInfoComponent implements OnInit {
  id:any;
  chefsTab:any;
  chef:any;
  constructor() { }

  ngOnInit() {
    this.id= localStorage.getItem("chefId");
this.chefsTab= JSON.parse(localStorage.getItem("chefs") || "[]");

    for(let i=0; i<this.chefsTab.length; i++){ 
      if(this.chefsTab[i].id==this.id) {
        this.chef=this.chefsTab[i];
          break;
      }   
  }
  }

}
