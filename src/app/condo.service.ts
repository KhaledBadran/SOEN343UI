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
    return this.http.post<Condo>(this.condosURL, newCondo, this.httpOptions);
  }

  getCondo(id: string): Observable<Condo> {
    const getURL = `${this.condosURL}/${id}`;
    return this.http.get<Condo>(getURL);
  }

  updateCondo (condo: Condo): Observable<any> {
    console.log('in update Condo');
    const putURL = `${this.condosURL}/${condo.property.id}`;
    console.log(condo);
    console.log(putURL);
    return this.http.put(putURL, condo , this.httpOptions);
  }

  deleteCondo (condo: Condo): Observable<any> {
    const deleteURL = `${this.condosURL}/${condo.property.id}`;
    return this.http.delete<Condo>(deleteURL, this.httpOptions);
  }


}
