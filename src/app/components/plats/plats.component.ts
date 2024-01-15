import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
platsTab:any=[]
  constructor() { }

  ngOnInit() {
    this.platsTab = JSON.parse(localStorage.getItem("plats") || "[]");
  }

}
