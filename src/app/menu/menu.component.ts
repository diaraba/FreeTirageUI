import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  IconChange!: boolean;
  activeAccueil!: boolean
  activeTirage!: boolean
  constructor() { }

  ngOnInit(): void {
    this.IconChange = true;
    this.activeAccueil = true;
    this.activeTirage = false;
  }

  changeColorButonAccueilMenu(){
    this.activeAccueil = true;
    this.activeTirage = false;
  }
  changeColorButonTirageMenu(){
    this.activeAccueil = false;
    this.activeTirage = true;
  }
  changeIcon(){
    this.IconChange = !this.IconChange;

  }

}
