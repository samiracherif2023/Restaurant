import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
chefs:any=[];
  constructor() { }

  ngOnInit() {
    this.chefs = JSON.parse(localStorage.getItem("chefs") || "[]");
  }

}
