import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
@Input() chefInput:any;
  constructor() { }

  ngOnInit() {
  }
  experienceColor(e) {
    if (0<e && e<3) {
      return "orange";
    }
    else if (4<e && e<8) {
      return "yellow";
    }
    else {
      return "red";
    }
  }
}
