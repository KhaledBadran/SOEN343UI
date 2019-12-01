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
    return this.http.post<Apartment>(this.apartmentsURL, newApartment, this.httpOptions);
  }

  getApartment(id: string): Observable<Apartment> {
    const getURL = `${this.apartmentsURL}/${id}`;
    return this.http.get<Apartment>(getURL);
  }

  updateApartment (apartment: Apartment): Observable<any> {
    console.log('in update Apartment');
    const putURL = `${this.apartmentsURL}/${apartment.property.id}`;
    console.log(apartment);
    console.log(putURL);
    return this.http.put(putURL, apartment , this.httpOptions);
  }

  deleteApartment (apartment: Apartment): Observable<any> {
    const deleteURL = `${this.apartmentsURL}/${apartment.property.id}`;
    return this.http.delete<Apartment>(deleteURL, this.httpOptions);
  }


}
