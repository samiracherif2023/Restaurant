import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  plats:any = [];
  id:any;
  plat:any={};
  constructor( private activateRoute:ActivatedRoute , private platService:PlatService, private router:Router) { }

  ngOnInit() {
    this.id= this.activateRoute.snapshot.paramMap.get("x");
this.platService.getPlatById(this.id).subscribe(
  (data)=> {
    this.plat=data.plat;
  }

)
  }
  editPlat(){
    this.platService.editPlat(this.plat).subscribe(
      (data)=>{
        console.log("Here data after edit",data);
      }
    )
this.router.navigate(["admin"]);
  }
}
