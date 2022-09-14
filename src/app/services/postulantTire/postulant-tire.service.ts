import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostulantTireModel} from "../../models/postulant-tire.model";

@Injectable({
  providedIn: 'root'
})
export class PostulantTireService {

  url = "http://localhost:8080/postulant_trie"
  constructor(private http: HttpClient) { }

  getPostulantTire(libelletirage: string): Observable<PostulantTireModel[]>{
    return this.http.get<PostulantTireModel[]>(`${this.url}/afficherPostulantTireParTirage/${libelletirage}`);
  }
}
