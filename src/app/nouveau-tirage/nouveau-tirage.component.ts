import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListeDetail } from '../models/liste-detail.model';
import { Tirage } from '../models/tirage.model';
import { ListeDetailsService } from '../services/listedetails/liste-details.service';
import { TirageService } from '../services/tirage/tirage.service';
import {ImportFichierService} from "../services/import-fichier/import-fichier.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nouveau-tirage',
  templateUrl: './nouveau-tirage.component.html',
  styleUrls: ['./nouveau-tirage.component.css']
})
export class NouveauTirageComponent implements OnInit {
  poppup!:boolean;
  importpopup!:boolean;
  selectedFiles !: FileList;
  detailListe!: ListeDetail[];
  tirage: Tirage[] = [];
  tirageJson: Tirage = {
    idt: 0,
    libellel: '',
    nbredemande: 0,
    datet: ''
  }
    idt: number = 0;
    libelleliste: string = '';
    nbredemande: number = 0;
    libelletirage: string = '';

  constructor(private importFichierService: ImportFichierService,private tirageService: TirageService,private listeDetailService: ListeDetailsService, private route: Router) { }

  ngOnInit(): void {
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) =>{
      console.log(data)
      this.detailListe = data;

    })
  }
  alet(): void {
    setTimeout(() => {
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
    /*this.libelletirage = '';*/
    this.nbredemande = 0;
    this.libelleliste = ''
  }

  CreerTirage(){
    if (this.libelletirage == '' || this.nbredemande == 0 || this.libelleliste == '')
    {
      this.poppup = false;

    }else {
      this.tirageJson.libellel = this.libelletirage;
      this.tirageJson.nbredemande = this.nbredemande;
      console.log(this.libelleliste)
      this.tirageService.CreerTirage(this.tirageJson, this.libelleliste).subscribe();
      this.poppup = true;

    }
    this.ressetForm();

    //console.log(this.tirageJson);
    console.log(this.tirageJson.libellel);

  }
  GoToDetailTirage(){
    this.route.navigate(['/tirage-details',this.libelletirage])
  }
  fichierAEnvoyer!: any;

  envoiFichier(event: any) {

    this.fichierAEnvoyer = event.target["files"][0];
    console.log(this.fichierAEnvoyer)
  }
  envoyerFichierParLeService(){
    if (this.fichierAEnvoyer == null || this.libelleliste == '')
    {
      this.importpopup = false
    }else {
      this.importFichierService.importfichier(this.fichierAEnvoyer,this.libelleliste).subscribe((data)=>{
        console.log(data)
        this.alet();
        this.importpopup = true;
      });

    }

  }
}
