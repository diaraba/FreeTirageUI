import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ListeDetail} from "../models/liste-detail.model";
import {TirageService} from "../services/tirage/tirage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tirage} from "../models/tirage.model";
import {PostulantTireModel} from "../models/postulant-tire.model";
import {PostulantTireService} from "../services/postulantTire/postulant-tire.service";
import * as XLSX from 'xlsx';
import {ListeDetailsService} from "../services/listedetails/liste-details.service";

@Component({
  selector: 'app-tirage-details',
  templateUrl: './tirage-details.component.html',
  styleUrls: ['./tirage-details.component.css']
})
export class TirageDetailsComponent implements OnInit {

  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
  libelleListe!: any
  tirageDetail!: Tirage
  detailListe!: ListeDetail[];
  url = "/tirage-details"
  public libelleTirage!: string;
  constructor(private listeService: ListeDetailsService,private postulantTireService: PostulantTireService,private tirageService: TirageService,private router: Router, private route: ActivatedRoute) {}
  listePostulantTire!: PostulantTireModel[];
  displayedColumns: string[] = ['nompt', 'prenompt','emailpt', 'numeropt'];
  dataSource = new MatTableDataSource<PostulantTireModel>(this.listePostulantTire);

  ngOnInit(): void {
    this.libelleTirage = this.route.snapshot.params['id']
    //METHODE PERMETTANT DE RECUPERER LA LISTE PAR LIBELLE TIRAGE
    this.listeService.getLibelleListeParLibelleTirage(this.libelleTirage).subscribe(data =>{
      this.libelleListe = data.toString()
      console.log(data)
    })
    //METHODE PERMETTANT DE RETROUVER LE TIRAGE PAR LIBELLE
    this.tirageService.getTirageParLibelleL(this.libelleTirage).subscribe((data: Tirage) =>{
      console.log(data)
      this.tirageDetail = data;
      console.log(data.nbredemande)

    })
    //METHODE PERMETTANT DE RETROUVER LES POSTULANT TIRE
    this.postulantTireService.getPostulantTire(this.libelleTirage).subscribe((data: PostulantTireModel[]) =>{
      console.log(data)
      this.dataSource.data = data;
    });

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



}
