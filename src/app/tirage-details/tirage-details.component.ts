import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ListeDetail} from "../models/liste-detail.model";
import {TirageService} from "../services/tirage/tirage.service";
import {ActivatedRoute} from "@angular/router";
import {Tirage} from "../models/tirage.model";
import {PostulantTireModel} from "../models/postulant-tire.model";
import {PostulantTireService} from "../services/postulantTire/postulant-tire.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tirage-details',
  templateUrl: './tirage-details.component.html',
  styleUrls: ['./tirage-details.component.css']
})
export class TirageDetailsComponent implements OnInit {
  Seasons = [
    { 	"id": 1,
      "name": "Spring",
      "Fruit": "Orange" },
    {	"id": 2,
      "name": "Summer",
      "Fruit": "Mango"},
    {	"id": 3,
      "name": "Winter",
      "Fruit": "Apple"},
    {	"id": 4,
      "name": "Autumn",
      "Fruit": "Banana"}]
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
  detailListe!: ListeDetail[];
  url = "/tirage-details"
  libelleTirage!: string;
  constructor(private postulantTireService: PostulantTireService,private tirageService: TirageService, private route: ActivatedRoute) {}
  listePostulantTire!: PostulantTireModel[];
  displayedColumns: string[] = ['nompt', 'prenompt','emailpt', 'numeropt'];
  dataSource = new MatTableDataSource<PostulantTireModel>(this.listePostulantTire);

  ngOnInit(): void {
    this.libelleTirage = this.route.snapshot.params['id']
    /*this.tirageService.getTirageParLibelle(this.libelleTirage).subscribe((data: Tirage[]) =>{
      console.log(data)
      this.dataSource.data = data;

    })*/
    this.postulantTireService.getPostulantTire(this.libelleTirage).subscribe((data: PostulantTireModel[]) =>{
      console.log(data)
      this.dataSource.data = data;

    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
