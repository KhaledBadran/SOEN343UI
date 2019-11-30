import { Condo } from './Property';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CondoService {

  private condosURL = 'http://localhost:8080/api/v1/condo';  // URL to local api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addCondo (newCondo: Condo): Observable<Condo> {
    console.log('in addCondo of Service');
    console.log(newCondo);
    return this.http.post<Condo>(this.condosURL, newCondo, this.httpOptions);
  }

}
