import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table-chefs',
  templateUrl: './table-chefs.component.html',
  styleUrls: ['./table-chefs.component.css']
})
export class TableChefsComponent implements OnInit {
chefs:any=[];

  constructor(private router:Router) { }

  ngOnInit() {
    this.chefs=JSON.parse(localStorage.getItem("chefs") || "[]");
  }

  displayChef(id:any){
    localStorage.setItem("chefId",id);
    this.router.navigate(["chefInfo"]);
  }

  editChef(id:any){

    this.router.navigate([`editChef/${id}`]);

  }

  deleteChef(id:any){
    
    for (let i = 0; i < this.chefs.length; i++) {
      if (this.chefs[i].id == id) {
        this.chefs.splice(i,1);
        break;
      }
    }
    localStorage.setItem("chefs", JSON.stringify(this.chefs));
  }
}
