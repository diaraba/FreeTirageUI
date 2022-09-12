import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ListeDetail } from 'src/app/models/liste-detail.model';
 
@Injectable({
  providedIn: 'root'
})
export class ListeDetailsService {
url = 'http://localhost:8080/liste/Afficher';

  constructor(private http: HttpClient) { }

  getListeDetails(): Observable<ListeDetail[]> {

    return this.http.get<ListeDetail[]>(`${this.url}`)
  }
  getlisteDetailById(id: number): Observable<ListeDetail>{
    return this.http.get<ListeDetail>(`${this.url}/${id}`);
  }
}
