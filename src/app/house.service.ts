import { House } from './Property';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private housesURL = 'http://localhost:8080/api/v1/house';  // URL to local api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addHouse (newHouse: House): Observable<House> {
    console.log('in addHouse of Service');
    console.log(newHouse);
    return this.http.post<House>(this.housesURL, newHouse, this.httpOptions);
  }

}
