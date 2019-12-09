import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get('');
  }

  getOptions(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }


}
