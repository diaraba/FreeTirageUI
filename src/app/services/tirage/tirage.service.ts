import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/app/models/tirage.model';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  url = 'http://localhost:8080/tirage/creer_tirage/LISTE12';
  
  constructor(private http: HttpClient) { }

  CreerTirage(tirage: Tirage, libelleL: string):Observable<Object>{
    return this.http.post(`${this.url}`,tirage);
  }
}
