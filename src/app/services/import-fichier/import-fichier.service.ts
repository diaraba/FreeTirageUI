import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImportFichierService {

  url = "http://localhost:8080/postulant"
  constructor(private http: HttpClient) { }


  importfichier(fichier: any, libelleListe: string): Observable<void>{
    let formData = new FormData();
    formData.append('file',fichier);
    console.log(fichier);
    return this.http.post<void>(`${this.url}/ajoute_postulant/${libelleListe}`,formData);
  }
}
