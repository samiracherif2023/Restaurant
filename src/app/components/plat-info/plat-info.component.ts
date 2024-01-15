import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {
  id:any;
  plats:any;
  plat:any;
  constructor( private platService:PlatService) { }

  ngOnInit() {
    this.id= localStorage.getItem("platId");
    this.platService.getPlatById(this.id).subscribe(
      (data)=>{
        this.plat = data.plat;
      }
    );
  }

}
