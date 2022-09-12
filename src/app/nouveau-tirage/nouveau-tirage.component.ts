import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListeDetail } from '../models/liste-detail.model';
import { Tirage } from '../models/tirage.model';
import { ListeDetailsService } from '../services/listedetails/liste-details.service';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-nouveau-tirage',
  templateUrl: './nouveau-tirage.component.html',
  styleUrls: ['./nouveau-tirage.component.css']
})
export class NouveauTirageComponent implements OnInit {
  detailListe!: ListeDetail[];
  tirage: Tirage[] = [];
  tirageJson: Tirage = {
    idt: 0,
    libellel: '',
    libelletirage: '',
    nbredemande: 0
  }
    idt: number = 0;
    libelleliste: string = '';
    nbredemande: number = 0;
    libelletirage: string = '';

  constructor(private tirageService: TirageService,private listeDetailService: ListeDetailsService) { }

  ngOnInit(): void {
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) =>{
      console.log(data)
      this.detailListe = data;
      
    })
  }

  ressetForm(){
    this.tirageJson.libellel = '';
    this.tirageJson.libelletirage = '';
    this.tirageJson.nbredemande = 0;
  }

  CreerTirage(){
    this.tirageJson.libellel = this.libelleliste;
    this.tirageJson.nbredemande = this.nbredemande;
    this.tirageJson.libelletirage = this.libelletirage;
    this.tirageService.CreerTirage(this.tirageJson,this.tirageJson.libellel).subscribe();
    //console.log(this.tirageJson);
    console.log(this.tirageJson.libellel);
    this.ressetForm();
  }


}
