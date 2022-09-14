import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/app/models/tirage.model';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  url = 'http://localhost:8080/tirage';

  constructor(private http: HttpClient) { }

  CreerTirage(tirage: Tirage, libelle: string):Observable<Object>{
    return this.http.post(`${this.url}/creer_tirage/${libelle}`,tirage);
  }
  getTirage():Observable<Tirage[]>{
    return this.http.get<Tirage[]>(`${this.url}`)
  }

  getTirageParLibelle(libelle: string):Observable<Tirage[]>{
    return this.http.get<Tirage[]>(`${this.url}/afficherliste/${libelle}`)
  }

  getNombreDeTirage(idliste: number):Observable<number>{
    return this.http.get<number>(`${this.url}/afficherNombreTirage/${idliste}`)
  }
}
