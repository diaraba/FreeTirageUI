import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ListeDetail} from "../models/liste-detail.model";
import {ListeDetailsService} from "../services/listedetails/liste-details.service";
import {TirageService} from "../services/tirage/tirage.service";
import {Tirage} from "../models/tirage.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.component.html',
  styleUrls: ['./liste-details.component.css']
})
export class ListeDetailsComponent implements OnInit {
  detailListe!: ListeDetail[];
  url = "/tirage-details"
  libelleListe!: string;
  constructor(private tirageService: TirageService, private route: ActivatedRoute) {}
  ELEMENT_DATA!: Tirage[];
  displayedColumns: string[] = ['libellel', 'datet','nbredemande', 'Action'];
  dataSource = new MatTableDataSource<Tirage>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.libelleListe = this.route.snapshot.params['id']
    this.tirageService.getTirageParLibelle(this.libelleListe).subscribe((data: Tirage[]) =>{
      console.log(data)
      this.dataSource.data = data;

    })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
