import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListeDetail } from '../models/liste-detail.model';
import { Tirage } from '../models/tirage.model';
import { ListeDetailsService } from '../services/listedetails/liste-details.service';
import { TirageService } from '../services/tirage/tirage.service';
import {ImportFichierService} from "../services/import-fichier/import-fichier.service";

@Component({
  selector: 'app-nouveau-tirage',
  templateUrl: './nouveau-tirage.component.html',
  styleUrls: ['./nouveau-tirage.component.css']
})
export class NouveauTirageComponent implements OnInit {
  selectedFiles !: FileList;
  detailListe!: ListeDetail[];
  tirage: Tirage[] = [];
  tirageJson: Tirage = {
    idt: 0,
    libellel: '',
    nbredemande: 0
  }
    idt: number = 0;
    libelleliste: string = '';
    nbredemande: number = 0;
    libelletirage: string = '';

  constructor(private importFichierService: ImportFichierService,private tirageService: TirageService,private listeDetailService: ListeDetailsService) { }

  ngOnInit(): void {
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) =>{
      console.log(data)
      this.detailListe = data;

    })
  }
  alet(): void {
    setInterval(() => {
      this.getData();
    }, 1000);
  }
  getData(){
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) =>{
      console.log(data)
      this.detailListe = data;

    })
  }


  ressetForm(){
    this.tirageJson.libellel = '';
    this.tirageJson.nbredemande = 0;
  }

  CreerTirage(){
    this.tirageJson.libellel = this.libelletirage;
    this.tirageJson.nbredemande = this.nbredemande;
    this.tirageService.CreerTirage(this.tirageJson, this.libelleliste).subscribe();
    //console.log(this.tirageJson);
    console.log(this.tirageJson.libellel);
    this.ressetForm();
  }
  fichierAEnvoyer!: any;

  envoiFichier(event: any) {

    this.fichierAEnvoyer = event.target["files"][0];
    console.log(this.fichierAEnvoyer)
  }
  envoyerFichierParLeService(){
    this.importFichierService.importfichier(this.fichierAEnvoyer,this.libelleliste).subscribe(data=>{
      console.log(data)
    });
    this.alet();
  }
}
