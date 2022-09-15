import {AfterViewInit, OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';
import {ListeDetail} from '../models/liste-detail.model';
import {ListeDetailsService} from '../services/listedetails/liste-details.service';
import {TirageService} from "../services/tirage/tirage.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  detailListe!: ListeDetail[];
  url = "/liste-details"
  nombre!: any;
  nombreTotalDeTirage!: number
  nombreTotalDeListeTire!: number
  nombreTotalListe!: number;
  constructor(private listeDetailService: ListeDetailsService, private tirageService: TirageService) {
  }

  ELEMENT_DATA!: ListeDetail[];
  displayedColumns: string[] = ['libellel', 'datel', 'Action'];
  dataSource = new MatTableDataSource<ListeDetail>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) => {
      console.log(data)
      this.dataSource.data = data;
      console.log(this.dataSource.data[2])

      /*this.tirageService.getNombreDeTirage(this.dataSource.data[0].idl).subscribe((nom: number) => {
        this.nombre = nom
      })*/
    })

    this.tirageService.getNombreTirageTotal().subscribe(data => {
      this.nombreTotalDeTirage = data;
    })

    this.tirageService.getNombreTotalDeListeTire().subscribe(data=>{
      this.nombreTotalDeListeTire = data
    })

    this.listeDetailService.getNombreTotalListe().subscribe(data=>{
      this.nombreTotalListe = data
    })
    //METHODE PERMETTANT DE RECUPERER L'ID DE LA LISTE EN ENVOYANT DANS LA METHODE PERMETTANT DE RETOURNER LE NOMBRE DE TIRAGE PAR LISTE


    this.tirageService.getNombreTirageParListe().subscribe(data=>{
      this.nombre = data
      console.log(this.nombre);
      
    })
  }

  /*getnombre(id:number){

    this.tirageService.getNombreDeTirage(id).subscribe((nom: number) => {
      this.nombre = nom

    })

  }*/


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


