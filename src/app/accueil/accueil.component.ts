
import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { ListeDetail } from '../models/liste-detail.model';
import { ListeDetailsService } from '../services/listedetails/liste-details.service';
import {TirageService} from "../services/tirage/tirage.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
   detailListe!: ListeDetail[];
  url = "/liste-details"

  constructor(private listeDetailService: ListeDetailsService, private tirageService: TirageService) {}

  ELEMENT_DATA!: ListeDetail[];
  displayedColumns: string[] = ['libellel', 'datel', 'Action'];
  dataSource = new MatTableDataSource<ListeDetail>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.listeDetailService.getListeDetails().subscribe((data: ListeDetail[]) =>{
      console.log(data)
      this.dataSource.data = data;

    })
    //METHODE PERMETTANT DE RECUPERER L'ID DE LA LISTE EN ENVOYANT DANS LA METHODE PERMETTANT DE RETOURNER LE NOMBRE DE TIRAGE PAR LISTE



  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}


