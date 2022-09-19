import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  IconChange!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.IconChange = true;
  }

  changeIcon(){
    this.IconChange = !this.IconChange;

  }

}
