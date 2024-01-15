import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';


@Component({
  selector: 'app-table-plats',
  templateUrl: './table-plats.component.html',
  styleUrls: ['./table-plats.component.css']
})
export class TablePlatsComponent implements OnInit {
plats:any=[];
plat:any={};
  constructor(private router:Router, private platService:PlatService) { }

  ngOnInit() {
    this.platService.getAllPlats().subscribe(
      (data) => {
        this.plats = data.platsArray;
      }
    );
  }

editPlat(id:any){
  this.router.navigate([`editPlat/${id}`]);

}
  displayPlat(id:any){
    localStorage.setItem("platId",id);
    this.router.navigate(["platInfo"]);

  }
deletePlat(id){
  this.platService.deletePlat(id).subscribe(
    (data) => {
      console.log("Here response from BE", data.isDeleted);
      this.platService.getAllPlats().subscribe(
        (data) => {
          this.plats = data.platsArray;
        }
      );
    })
}
}

