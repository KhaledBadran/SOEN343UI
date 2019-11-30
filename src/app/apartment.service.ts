import { Apartment } from './Property';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private apartmentsURL = 'http://localhost:8080/api/v1/apartment';  // URL to local api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  addApartment (newApartment: Apartment): Observable<Apartment> {
    console.log('in addApartment of Service');
    console.log(newApartment);
    return this.http.post<Apartment>(this.apartmentsURL, newApartment, this.httpOptions);
  }

  getApartment(id: number): Observable<Apartment> {
    console.log('in getApartment in apartment service');
    const getURL = `${this.apartmentsURL}/${id}`;
    console.log('getURL is:');
    console.log(getURL);
    return this.http.get<Apartment>(getURL);
  }

  updateApartment (apartment: Apartment): Observable<any> {
    const putURL = `${this.apartmentsURL}/${apartment.id}`;
    return this.http.put(putURL, apartment, this.httpOptions);
  }

  deleteApartment (apartment: Apartment): Observable<any> {
    const deleteURL = `${this.apartmentsURL}/${apartment.id}`;
    return this.http.delete<Apartment>(deleteURL, this.httpOptions);
  }


}
