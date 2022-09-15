import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ListeDetail } from 'src/app/models/liste-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ListeDetailsService {
url = 'http://localhost:8080/liste';

  constructor(private http: HttpClient) { }

  getListeDetails(): Observable<ListeDetail[]> {

    return this.http.get<ListeDetail[]>(`${this.url}/Afficher`)
  }
  /*getlisteDetailById(id: number): Observable<ListeDetail>{
    return this.http.get<ListeDetail>(`${this.url}/${id}`);
  }*/

  getNombreTotalListe():Observable<number>{
    return this.http.get<number>(`${this.url}/nombreTotalListe`)
  }

  getListeParLibelle(libelle: string):Observable<ListeDetail>{
    return this.http.get<ListeDetail>(`${this.url}/trouverListeParLibelle/${libelle}`)
  }

  getLibelleListeParLibelleTirage(libelletirage: string):Observable<Object>{
    return this.http.get(`${this.url}/trouverListeParLibelleTirage/${libelletirage}`)
  }
}
